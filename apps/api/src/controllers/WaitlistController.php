<?php
/**
 * Waitlist Controller
 * Handles waitlist API logic
 */

require_once __DIR__ . '/../models/Waitlist.php';

class WaitlistController {
    private $waitlist;
    
    public function __construct() {
        $this->waitlist = new Waitlist();
    }
    
    /**
     * POST /api/waitlist
     * Add email to waitlist
     */
    public function joinWaitlist() {
        try {
            $body = getJsonBody();
            
            if (!$body || !isset($body['email'])) {
                sendError('Email is required', 400);
            }
            
            $email = $body['email'];
            
            // Validate email format
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                sendError('Invalid email format', 400);
            }
            
            // Check if email already exists
            $existing = $this->waitlist->findByEmail($email);
            if ($existing) {
                sendError('Email already exists', 409);
            }
            
            // Create new entry
            $result = $this->waitlist->create($email);
            
            if (!$result['success']) {
                sendError($result['error'], 409);
            }
            
            sendResponse([
                'message' => 'Successfully added to waitlist',
                'data' => $result
            ], 201);
            
        } catch (Exception $e) {
            error_log('Waitlist Error: ' . $e->getMessage());
            sendError('Server error', 500, $e->getMessage());
        }
    }
    
    /**
     * GET /api/waitlist
     * Get all waitlist entries
     */
    public function getWaitlist() {
        try {
            $entries = $this->waitlist->findAll();
            $count = $this->waitlist->count();
            
            // Convert MongoDB objects to arrays
            $data = [];
            foreach ($entries as $entry) {
                $data[] = [
                    'id' => (string)$entry['_id'],
                    'email' => $entry['email'],
                    'createdAt' => $entry['createdAt']->toDateTime()->format('c'),
                    'updatedAt' => $entry['updatedAt']->toDateTime()->format('c')
                ];
            }
            
            sendResponse([
                'message' => 'Waitlist fetched successfully',
                'count' => $count,
                'data' => $data
            ], 200);
            
        } catch (Exception $e) {
            error_log('Waitlist Error: ' . $e->getMessage());
            sendError('Server error', 500, $e->getMessage());
        }
    }
}
?>
