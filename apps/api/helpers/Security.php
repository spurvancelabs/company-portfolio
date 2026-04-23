<?php
/**
 * Security Helper
 */

class Security {
    
    private static $apiKey = 'spurvance_2026_secure_key_change_this';
    
    // Validate API key for protected routes
    public static function requireApiKey() {
        $headers = getallheaders();
        $key = $headers['X-Api-Key'] ?? $_SERVER['HTTP_X_API_KEY'] ?? '';
        
        if ($key !== self::$apiKey) {
            http_response_code(401);
            echo json_encode(['success' => false, 'error' => 'Invalid API key']);
            exit;
        }
    }
    
    // Sanitize input
    public static function sanitize($data) {
        if (is_array($data)) {
            return array_map([self::class, 'sanitize'], $data);
        }
        return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
    }
    
    // Validate required fields
    public static function validateRequired($input, $fields) {
        $errors = [];
        foreach ($fields as $field) {
            if (!isset($input[$field]) || empty(trim($input[$field]))) {
                $errors[$field] = ucfirst($field) . ' is required';
            }
        }
        return $errors;
    }
    
    // Validate email
    public static function validateEmail($email) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return 'Invalid email format';
        }
        return null;
    }
    
    // Generate unique ID
    public static function generateId() {
        return bin2hex(random_bytes(16));
    }
    
    // Allow only specific HTTP methods
    public static function allowMethods($allowed) {
        if (!in_array($_SERVER['REQUEST_METHOD'], $allowed)) {
            http_response_code(405);
            echo json_encode(['success' => false, 'error' => 'Method not allowed']);
            exit;
        }
    }
}