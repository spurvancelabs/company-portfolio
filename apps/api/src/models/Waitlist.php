<?php
/**
 * Waitlist Model
 * Handles database operations for waitlist collection
 */

class Waitlist {
    private $collection;
    
    public function __construct() {
        $this->collection = $GLOBALS['db']->selectCollection('waitlist');
    }
    
    /**
     * Create a new waitlist entry
     */
    public function create($email) {
        try {
            $result = $this->collection->insertOne([
                'email' => strtolower(trim($email)),
                'createdAt' => new MongoDB\BSON\UTCDateTime(),
                'updatedAt' => new MongoDB\BSON\UTCDateTime()
            ]);
            
            return [
                'success' => true,
                'id' => (string)$result->getInsertedId(),
                'email' => strtolower(trim($email))
            ];
        } catch (MongoDB\Driver\Exception\WriteException $e) {
            if (strpos($e->getMessage(), 'duplicate key') !== false) {
                return [
                    'success' => false,
                    'error' => 'Email already exists'
                ];
            }
            throw $e;
        }
    }
    
    /**
     * Find one entry by email
     */
    public function findByEmail($email) {
        $result = $this->collection->findOne([
            'email' => strtolower(trim($email))
        ]);
        return $result;
    }
    
    /**
     * Find all entries sorted by creation date
     */
    public function findAll() {
        $results = $this->collection->find(
            [],
            ['sort' => ['createdAt' => -1]]
        );
        return iterator_to_array($results);
    }
    
    /**
     * Count total entries
     */
    public function count() {
        return $this->collection->countDocuments();
    }
}
?>
