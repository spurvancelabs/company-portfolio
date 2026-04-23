<?php
/**
 * Contact Form Controller
 */

class ContactController {
    private $db;
    
    public function __construct() {
        $database = Database::getInstance();
        $this->db = $database->getCollection('contacts');
    }
    
    public function submit($input) {
        // Validate
        $errors = Security::validateRequired($input, ['name', 'email', 'message']);
        
        $emailError = Security::validateEmail($input['email'] ?? '');
        if ($emailError) {
            $errors['email'] = $emailError;
        }
        
        if (!empty($errors)) {
            http_response_code(400);
            echo json_encode([
                'success' => false, 
                'error' => 'Validation failed', 
                'errors' => $errors
            ]);
            exit;
        }
        
        // Prepare contact data
        $contact = [
            'name' => $input['name'],
            'email' => $input['email'],
            'message' => $input['message'],
            'company' => $input['company'] ?? '',
            'service' => $input['service'] ?? 'general',
            'status' => 'unread',
            'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ];
        
        // Handle date for both MongoDB and file storage
        if (class_exists('MongoDB\BSON\UTCDateTime')) {
            $contact['created_at'] = new MongoDB\BSON\UTCDateTime();
        } else {
            $contact['created_at'] = date('c');
        }
        
        $result = $this->db->insertOne($contact);
        
        http_response_code(201);
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for contacting us! We will get back to you soon.',
            'id' => (string)$result->getInsertedId()
        ]);
    }
    
    public function getAll() {
        // Security::requireApiKey();
        
        $contacts = $this->db->find(
            [],
            ['sort' => ['created_at' => -1], 'limit' => 100]
        );
        
        $result = [];
        foreach ($contacts as $contact) {
            $contact['_id'] = (string)$contact['_id'];
            
            // Format date if it's a MongoDB object
            if (isset($contact['created_at']) && $contact['created_at'] instanceof MongoDB\BSON\UTCDateTime) {
                $contact['created_at'] = $contact['created_at']->toDateTime()->format('c');
            }
            
            $result[] = $contact;
        }
        
        echo json_encode([
            'success' => true, 
            'data' => $result
        ]);
    }
}