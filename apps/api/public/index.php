<?php
/**
 * Spurvance Labs API - Main Entry Point
 * Don't modify this file - Add logic in controllers
 */

// Production error handling
ini_set('display_errors', 0);
error_reporting(0);

// CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Api-Key');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Load environment variables
if (file_exists(__DIR__ . '/../.env')) {
    $lines = file(__DIR__ . '/../.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
            putenv(trim($line));
        }
    }
}

// Load helpers and config
require_once __DIR__ . '/../helpers/Security.php';
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../controllers/ContactController.php';

// Get request details
$uri = strtok($_SERVER['REQUEST_URI'], '?');
$uri = rtrim(str_replace('/api', '', $uri), '/') ?: '/';
$method = $_SERVER['REQUEST_METHOD'];
$input = Security::sanitize(json_decode(file_get_contents('php://input'), true) ?? []);

// Response helpers
function success($data = null, $message = 'Success', $code = 200) {
    http_response_code($code);
    echo json_encode(['success' => true, 'message' => $message, 'data' => $data]);
    exit;
}

function error($message = 'Error', $code = 400) {
    http_response_code($code);
    echo json_encode(['success' => false, 'error' => $message]);
    exit;
}

// ============================================
// ROUTES - Just add new routes here
// ============================================

try {
    switch ($uri) {
        case '/':
            success([
                'name' => 'Spurvance Labs API',
                'version' => '1.0.0',
                'endpoints' => [
                    'GET  /health' => 'Health check',
                    'POST /contact' => 'Submit contact form',
                    'GET  /contact' => 'Get contacts (API key required)'
                ]
            ]);
            break;
            
        case '/health':
            success(['status' => 'healthy', 'database' => 'mongodb']);
            break;
            
        case '/contact':
            $controller = new ContactController();
            
            if ($method === 'POST') {
                $controller->submit($input);
            } elseif ($method === 'GET') {
                $controller->getAll();
            } else {
                error('Method not allowed', 405);
            }
            break;
            
        default:
            error('Endpoint not found', 404);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}