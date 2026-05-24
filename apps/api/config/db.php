<?php
/**
 * MongoDB Connection
 * Connects to MongoDB using the MongoDB PHP driver
 */

require_once __DIR__ . '/env.php';

try {
    // MongoDB connection string
    $mongodb_uri = MONGODB_URI;
    
    if (empty($mongodb_uri)) {
        throw new Exception('MONGODB_URI not set in .env file');
    }
    
    // Create MongoDB client
    $client = new MongoDB\Client($mongodb_uri);
    
    // Select database
    $db = $client->selectDatabase('spurvance');
    
    // Test connection
    $db->command(['ping' => 1]);
    
    // Store in global variable for use in other files
    $GLOBALS['db'] = $db;
    
} catch (Exception $e) {
    error_log('MongoDB Connection Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'message' => 'Database connection failed',
        'error' => $e->getMessage()
    ]);
    exit();
}
?>
