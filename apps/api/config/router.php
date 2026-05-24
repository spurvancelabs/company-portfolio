<?php
/**
 * Simple Router Helper
 * Provides utility functions for routing
 */

/**
 * Get JSON request body
 */
function getJsonBody() {
    $input = file_get_contents('php://input');
    return json_decode($input, true);
}

/**
 * Send JSON response
 */
function sendResponse($data, $status_code = 200) {
    http_response_code($status_code);
    echo json_encode($data);
    exit();
}

/**
 * Send error response
 */
function sendError($message, $status_code = 400, $error = null) {
    $response = ['message' => $message];
    if ($error) {
        $response['error'] = $error;
    }
    sendResponse($response, $status_code);
}
?>
