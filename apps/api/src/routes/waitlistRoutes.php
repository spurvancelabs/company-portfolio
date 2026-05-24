<?php
/**
 * Waitlist Routes
 * Handles /api/waitlist endpoints
 */

require_once __DIR__ . '/../controllers/WaitlistController.php';

$controller = new WaitlistController();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $controller->joinWaitlist();
} elseif ($method === 'GET') {
    $controller->getWaitlist();
} else {
    sendError('Method not allowed', 405);
}
?>
