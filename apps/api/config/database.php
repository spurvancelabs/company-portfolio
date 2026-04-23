<?php
/**
 * Database Connection - MongoDB with File Fallback
 */

class Database {
    private static $instance = null;
    private $connection;
    private $dbName;
    private $useMongoDB = false;
    
    private function __construct() {
        $this->dbName = getenv('MONGODB_DB') ?: 'spurvancelabs';
        
        // Check if MongoDB is available
        if (class_exists('MongoDB\Client')) {
            $mongodb_uri = getenv('MONGODB_URI');
            if ($mongodb_uri) {
                try {
                    $client = new MongoDB\Client($mongodb_uri);
                    $this->connection = $client->selectDatabase($this->dbName);
                    $this->connection->command(['ping' => 1]);
                    $this->useMongoDB = true;
                    return;
                } catch (Exception $e) {
                    // Will fall through to file storage
                }
            }
        }
        
        // File-based fallback
        $this->useMongoDB = false;
        $this->connection = [
            'path' => __DIR__ . '/../data/',
            'collections' => []
        ];
        
        // Create data directory
        if (!is_dir($this->connection['path'])) {
            mkdir($this->connection['path'], 0755, true);
        }
    }
    
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    public function getCollection($name) {
        if ($this->useMongoDB) {
            return $this->connection->selectCollection($name);
        }
        return new FileCollection($name, $this->connection['path']);
    }
}

/**
 * File-based collection for local development
 */
class FileCollection {
    private $name;
    private $path;
    private $file;
    
    public function __construct($name, $path) {
        $this->name = $name;
        $this->path = $path;
        $this->file = $path . $name . '.json';
        
        if (!file_exists($this->file)) {
            file_put_contents($this->file, json_encode([]));
        }
    }
    
    private function readData() {
        $data = json_decode(file_get_contents($this->file), true);
        return is_array($data) ? $data : [];
    }
    
    private function writeData($data) {
        file_put_contents($this->file, json_encode($data, JSON_PRETTY_PRINT), LOCK_EX);
    }
    
    public function insertOne($document) {
        $data = $this->readData();
        
        // Convert MongoDB UTCDateTime to string for local testing
        if (isset($document['created_at']) && $document['created_at'] instanceof MongoDB\BSON\UTCDateTime) {
            $document['created_at'] = $document['created_at']->toDateTime()->format('c');
        }
        
        $document['_id'] = bin2hex(random_bytes(16));
        $data[] = $document;
        $this->writeData($data);
        
        return new class($document['_id']) {
            private $id;
            public function __construct($id) { $this->id = $id; }
            public function getInsertedId() { return $this->id; }
        };
    }
    
    public function find($filter = [], $options = []) {
        $data = $this->readData();
        $results = $data;
        
        // Simple filtering
        foreach ($filter as $key => $value) {
            $results = array_filter($results, function($item) use ($key, $value) {
                return isset($item[$key]) && $item[$key] == $value;
            });
        }
        
        // Sorting
        if (isset($options['sort'])) {
            $sortKey = key($options['sort']);
            $sortDir = $options['sort'][$sortKey];
            usort($results, function($a, $b) use ($sortKey, $sortDir) {
                if (!isset($a[$sortKey])) return 1;
                if (!isset($b[$sortKey])) return -1;
                
                $valA = $a[$sortKey];
                $valB = $b[$sortKey];
                
                // Handle dates
                if (is_string($valA)) $valA = strtotime($valA);
                if (is_string($valB)) $valB = strtotime($valB);
                
                return $sortDir === -1 ? $valB <=> $valA : $valA <=> $valB;
            });
        }
        
        // Limit
        if (isset($options['limit'])) {
            $results = array_slice($results, 0, $options['limit']);
        }
        
        return $results;
    }
    
    public function findOne($filter = []) {
        $results = $this->find($filter, ['limit' => 1]);
        return !empty($results) ? $results[0] : null;
    }
}