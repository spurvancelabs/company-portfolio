<?php
// Enable error reporting for development
if ($_SERVER['HTTP_HOST'] === 'api.spurvancelabs.com' || $_SERVER['HTTP_HOST'] === 'localhost') {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

// CORS Headers - Import from config
require_once __DIR__ . '/../config/cors.php';
SpurvanceAPI\Config\CORS::setHeaders();

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Simple router
$request_uri = $_SERVER['REQUEST_URI'];
$request_method = $_SERVER['REQUEST_METHOD'];

// Remove query string and trailing slash
$request_uri = strtok($request_uri, '?');
$request_uri = rtrim($request_uri, '/');

// Load routes
require_once __DIR__ . '/../routes/api.php';

// Initialize router
$router = new SpurvanceAPI\Routes\Router();

// API Routes
$router->get('/health', function() {
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'healthy',
        'timestamp' => date('Y-m-d H:i:s'),
        'version' => '1.0.0'
    ]);
});

$router->get('/test', function() {
    header('Content-Type: application/json');
    echo json_encode(['message' => 'API is working!']);
});

// Handle 404
$router->set404(function() {
    header('Content-Type: application/json', true, 404);
    echo json_encode([
        'error' => 'Endpoint not found',
        'path' => $_SERVER['REQUEST_URI']
    ]);
});

$router->run($request_method, $request_uri);