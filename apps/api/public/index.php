<?php
/**
 * Spurvance Labs API - Main Entry Point
 * Handles all API requests with proper routing
 */

// Production error handling
ini_set('display_errors', 0);
error_reporting(0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/../error.log');

// CORS Headers
$allowed_origins = [
    'https://spurvancelabs.com',
    'https://www.spurvancelabs.com',
    'http://localhost:3000'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header('Access-Control-Allow-Origin: https://spurvancelabs.com');
}

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get request details
$request_uri = $_SERVER['REQUEST_URI'];
$request_method = $_SERVER['REQUEST_METHOD'];

// Remove query string and trailing slashes
$request_uri = strtok($request_uri, '?');
$request_uri = rtrim($request_uri, '/');

// Remove /public from path if present (from .htaccess rewrite)
$request_uri = str_replace('/public', '', $request_uri);

// Simple router
try {
    switch ($request_uri) {
        case '':
        case '/':
        case '/api':
            echo json_encode([
                'status' => 'success',
                'message' => 'Spurvance Labs API',
                'version' => '1.0.0',
                'environment' => 'production',
                'endpoints' => [
                    'GET /health' => 'Health check endpoint',
                    'GET /test' => 'Test endpoint',
                    'POST /contact' => 'Contact form submission',
                    'GET /products' => 'List all products',
                    'GET /services' => 'List all services'
                ]
            ]);
            break;
            
        case '/health':
            echo json_encode([
                'status' => 'healthy',
                'timestamp' => date('c'),
                'server' => $_SERVER['SERVER_NAME'],
                'php_version' => phpversion()
            ]);
            break;
            
        case '/test':
            echo json_encode([
                'success' => true,
                'message' => 'API is working correctly',
                'method' => $request_method,
                'path' => $request_uri,
                'timestamp' => date('Y-m-d H:i:s')
            ]);
            break;
            
        case '/products':
            if ($request_method === 'GET') {
                echo json_encode([
                    'success' => true,
                    'data' => [
                        [
                            'id' => 1,
                            'name' => 'NAT',
                            'description' => 'Network Address Translation Solution',
                            'url' => '/products/nat'
                        ]
                    ]
                ]);
            } else {
                http_response_code(405);
                echo json_encode(['error' => 'Method not allowed']);
            }
            break;
            
        case '/services':
            if ($request_method === 'GET') {
                echo json_encode([
                    'success' => true,
                    'data' => [
                        [
                            'id' => 1,
                            'name' => 'Web Development',
                            'description' => 'Professional web development services'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Cloud Solutions',
                            'description' => 'Enterprise cloud infrastructure'
                        ]
                    ]
                ]);
            } else {
                http_response_code(405);
                echo json_encode(['error' => 'Method not allowed']);
            }
            break;
            
        case '/contact':
            if ($request_method === 'POST') {
                $input = json_decode(file_get_contents('php://input'), true);
                
                if (!$input) {
                    http_response_code(400);
                    echo json_encode(['error' => 'Invalid JSON data']);
                    exit;
                }
                
                // Validate required fields
                $required = ['name', 'email', 'message'];
                foreach ($required as $field) {
                    if (!isset($input[$field]) || empty($input[$field])) {
                        http_response_code(400);
                        echo json_encode(['error' => "Missing required field: $field"]);
                        exit;
                    }
                }
                
                // Validate email
                if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
                    http_response_code(400);
                    echo json_encode(['error' => 'Invalid email address']);
                    exit;
                }
                
                // Here you would typically send email or save to database
                // For now, just return success
                
                echo json_encode([
                    'success' => true,
                    'message' => 'Thank you for contacting us! We will get back to you soon.',
                    'data' => [
                        'name' => htmlspecialchars($input['name']),
                        'email' => htmlspecialchars($input['email'])
                    ]
                ]);
            } else {
                http_response_code(405);
                echo json_encode(['error' => 'Method not allowed']);
            }
            break;
            
        default:
            http_response_code(404);
            echo json_encode([
                'error' => 'Endpoint not found',
                'path' => $request_uri,
                'method' => $request_method,
                'available_endpoints' => [
                    '/',
                    '/health',
                    '/test',
                    '/products',
                    '/services',
                    '/contact'
                ]
            ]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Internal server error',
        'message' => $e->getMessage()
    ]);
}