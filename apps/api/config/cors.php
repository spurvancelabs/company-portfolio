<?php
namespace SpurvanceAPI\Config;

class CORS {
    public static function setHeaders() {
        $allowed_origins = [
            'https://spurvancelabs.com',
            'https://www.spurvancelabs.com',
            'http://localhost:3000',
            'http://localhost:3001'
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
    }
}