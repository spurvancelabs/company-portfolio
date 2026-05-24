# PHP API Setup Guide for cPanel

This is a simple PHP API backend that replaces the Node.js setup. It's designed to work seamlessly with cPanel hosting.

## Prerequisites

- PHP 7.4+ (cPanel default)
- MongoDB PHP Driver installed
- MongoDB Atlas or local MongoDB instance

## Installation Steps

### 1. Upload Files to cPanel

1. Connect via FTP or File Manager in cPanel
2. Upload all files from `apps/api/` to your public_html or a subdirectory (e.g., `public_html/api`)
3. Ensure the directory structure is maintained:
   ```
   api/
   ├── index.php
   ├── .env
   ├── .htaccess
   ├── config/
   │   ├── env.php
   │   ├── db.php
   │   └── router.php
   └── src/
       ├── controllers/
       │   └── WaitlistController.php
       ├── models/
       │   └── Waitlist.php
       └── routes/
           └── waitlistRoutes.php
   ```

### 2. Install MongoDB PHP Driver

In cPanel, use **EasyApache** or **WHM** to install the MongoDB PHP extension:

**Option A: Via cPanel Terminal (SSH)**
```bash
pecl install mongodb
```

Then add to your php.ini:
```
extension=mongodb.so
```

**Option B: Via cPanel AutoInstaller**
1. Go to WHM → EasyApache 4
2. Search for "mongodb"
3. Select and install

**Option C: Contact your hosting provider** to install the MongoDB extension

### 3. Configure Environment Variables

Edit the `.env` file in your API directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
PORT=3000
```

Replace with your actual MongoDB connection string.

### 4. Set File Permissions

Via FTP or cPanel File Manager:
- Set `.env` file permissions to `600` (read/write for owner only)
- Set PHP files to `644` (readable by web server)
- Set directories to `755`

### 5. Test the API

Once uploaded, test your API:

```bash
# Test root endpoint
curl https://yourdomain.com/api/

# Test waitlist POST
curl -X POST https://yourdomain.com/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Test waitlist GET
curl https://yourdomain.com/api/waitlist
```

## API Endpoints

### 1. Health Check
- **URL:** `GET /api/`
- **Response:** `{"message": "API running"}`

### 2. Join Waitlist
- **URL:** `POST /api/waitlist`
- **Body:** `{"email": "user@example.com"}`
- **Success Response (201):**
  ```json
  {
    "message": "Successfully added to waitlist",
    "data": {
      "success": true,
      "id": "mongodb_id",
      "email": "user@example.com"
    }
  }
  ```
- **Error Responses:**
  - `400`: Email is required or invalid format
  - `409`: Email already exists

### 3. Get Waitlist
- **URL:** `GET /api/waitlist`
- **Response (200):**
  ```json
  {
    "message": "Waitlist fetched successfully",
    "count": 5,
    "data": [
      {
        "id": "mongodb_id",
        "email": "user@example.com",
        "createdAt": "2024-01-15T10:30:00Z",
        "updatedAt": "2024-01-15T10:30:00Z"
      }
    ]
  }
  ```

## CORS Configuration

The API allows requests from:
- `https://spurvancelabs.com`
- `http://spurvancelabs.com`
- `https://admin.spurvancelabs.com`
- `http://admin.spurvancelabs.com`
- `http://localhost:3000`

To add more origins, edit `index.php` and add to the `$allowed_origins` array.

## Adding New Endpoints

### 1. Create a Model (if needed)
Create a new file in `src/models/YourModel.php`:

```php
<?php
class YourModel {
    private $collection;
    
    public function __construct() {
        $this->collection = $GLOBALS['db']->selectCollection('your_collection');
    }
    
    public function create($data) {
        return $this->collection->insertOne($data);
    }
    
    public function findAll() {
        return iterator_to_array($this->collection->find([]));
    }
}
?>
```

### 2. Create a Controller
Create a new file in `src/controllers/YourController.php`:

```php
<?php
require_once __DIR__ . '/../models/YourModel.php';

class YourController {
    private $model;
    
    public function __construct() {
        $this->model = new YourModel();
    }
    
    public function getAll() {
        try {
            $data = $this->model->findAll();
            sendResponse(['data' => $data], 200);
        } catch (Exception $e) {
            sendError('Server error', 500, $e->getMessage());
        }
    }
}
?>
```

### 3. Create Routes
Create a new file in `src/routes/yourRoutes.php`:

```php
<?php
require_once __DIR__ . '/../controllers/YourController.php';

$controller = new YourController();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $controller->getAll();
} else {
    sendError('Method not allowed', 405);
}
?>
```

### 4. Register Route in index.php
Add to `index.php`:

```php
if (preg_match('/^\/your-endpoint\/?$/', $request_path)) {
    require_once __DIR__ . '/src/routes/yourRoutes.php';
    exit();
}
```

## Troubleshooting

### MongoDB Connection Error
- Verify MongoDB URI in `.env`
- Check if MongoDB PHP driver is installed: `php -m | grep mongodb`
- Ensure IP whitelist in MongoDB Atlas includes your server IP

### 404 Errors
- Check `.htaccess` is in the correct directory
- Verify `mod_rewrite` is enabled in Apache
- Check file permissions

### CORS Errors
- Add your domain to `$allowed_origins` in `index.php`
- Ensure requests include `Content-Type: application/json` header

### Permission Denied
- Set `.env` to `600`
- Set PHP files to `644`
- Set directories to `755`

## Performance Tips

1. **Enable Caching:** Add caching headers in `index.php`
2. **Database Indexing:** Create indexes on frequently queried fields
3. **Rate Limiting:** Implement rate limiting for public endpoints
4. **Logging:** Monitor error logs in cPanel

## Security Best Practices

1. ✅ CORS configured
2. ✅ Input validation on email
3. ✅ Environment variables for secrets
4. ✅ Error messages don't expose sensitive info
5. ⚠️ TODO: Add rate limiting
6. ⚠️ TODO: Add authentication for GET /api/waitlist

## Next Steps

1. Test all endpoints thoroughly
2. Set up error logging
3. Configure backups for MongoDB
4. Monitor API usage
5. Add authentication if needed

## Support

For issues with:
- **cPanel:** Contact your hosting provider
- **MongoDB:** Visit https://docs.mongodb.com/
- **PHP:** Visit https://www.php.net/docs.php
