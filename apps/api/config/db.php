<?php
namespace SpurvanceAPI\Config;

class Database {
    private static $instance = null;
    private $connection;
    
    private function __construct() {
        $db_host = getenv('DB_HOST') ?: 'localhost';
        $db_name = getenv('DB_NAME') ?: 'c3llz0ne_spurvance';
        $db_user = getenv('DB_USER') ?: 'c3llz0ne_spurvance';
        $db_pass = getenv('DB_PASSWORD') ?: '';
        
        try {
            $this->connection = new \PDO(
                "mysql:host=$db_host;dbname=$db_name;charset=utf8mb4",
                $db_user,
                $db_pass,
                [
                    \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                    \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
                    \PDO::ATTR_EMULATE_PREPARES => false
                ]
            );
        } catch (\PDOException $e) {
            error_log("Database connection failed: " . $e->getMessage());
            throw new \Exception('Database connection failed');
        }
    }
    
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    public function getConnection() {
        return $this->connection;
    }
}