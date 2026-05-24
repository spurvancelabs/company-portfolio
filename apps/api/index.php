<?php
/**
 * Simple PHP API Router
 * Entry point for all API requests
 */

// Enable error reporting for development (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Set JSON header
header('Content-Type: application/json');

// CORS headers
$allowed_origins = [
    "https://spurvancelabs.com",
    "http://spurvancelabs.com",
    "https://admin.spurvancelabs.com",
    "http://admin.spurvancelabs.com",
    "http://localhost:3000"
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Load environment variables
require_once __DIR__ . '/config/env.php';

// Load database connection
require_once __DIR__ . '/config/db.php';

// Load router
require_once __DIR__ . '/config/router.php';

// Get request path
$request_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$request_path = str_replace('/api', '', $request_path);
$request_method = $_SERVER['REQUEST_METHOD'];

// Route requests
if ($request_path === '/' && $request_method === 'GET') {
    echo json_encode(['message' => 'API running']);
    exit();
}

if (preg_match('/^\/waitlist\/?$/', $request_path)) {
    require_once __DIR__ . '/src/routes/waitlistRoutes.php';
    exit();
}

// 404 response
http_response_code(404);
echo json_encode(['message' => 'Endpoint not found']);
?>
