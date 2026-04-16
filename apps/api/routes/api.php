<?php
namespace SpurvanceAPI\Routes;

class Router {
    private $routes = [];
    private $notFoundCallback;
    
    public function get($path, $callback) {
        $this->routes['GET'][$path] = $callback;
    }
    
    public function post($path, $callback) {
        $this->routes['POST'][$path] = $callback;
    }
    
    public function put($path, $callback) {
        $this->routes['PUT'][$path] = $callback;
    }
    
    public function delete($path, $callback) {
        $this->routes['DELETE'][$path] = $callback;
    }
    
    public function set404($callback) {
        $this->notFoundCallback = $callback;
    }
    
    public function run($method, $path) {
        if (isset($this->routes[$method][$path])) {
            call_user_func($this->routes[$method][$path]);
        } elseif ($this->notFoundCallback) {
            call_user_func($this->notFoundCallback);
        } else {
            header('Content-Type: application/json', true, 404);
            echo json_encode(['error' => 'Not Found']);
        }
    }
}