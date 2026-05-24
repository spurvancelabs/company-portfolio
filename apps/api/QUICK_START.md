# Quick Start - PHP API

## What Changed?

Your Node.js backend has been converted to PHP. Here's what you need to know:

| Aspect | Node.js | PHP |
|--------|---------|-----|
| Entry Point | `app.js` | `index.php` |
| Framework | Express | Native PHP |
| Database | Mongoose | MongoDB PHP Driver |
| Routing | Express Router | Custom Router |
| Deployment | Node server | cPanel hosting |

## File Structure

```
api/
├── index.php                          # Main entry point
├── .env                               # Environment variables
├── .htaccess                          # Apache routing
├── config/
│   ├── env.php                        # Load .env
│   ├── db.php                         # MongoDB connection
│   └── router.php                     # Helper functions
└── src/
    ├── controllers/
    │   └── WaitlistController.php     # Business logic
    ├── models/
    │   └── Waitlist.php               # Database operations
    └── routes/
        └── waitlistRoutes.php         # Route handlers
```

## Setup Checklist

- [ ] Upload files to cPanel via FTP
- [ ] Install MongoDB PHP driver
- [ ] Update `.env` with MongoDB URI
- [ ] Set file permissions (600 for .env, 644 for PHP files)
- [ ] Test endpoints with curl or Postman

## Test Endpoints

```bash
# Health check
curl https://yourdomain.com/api/

# Add to waitlist
curl -X POST https://yourdomain.com/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Get waitlist
curl https://yourdomain.com/api/waitlist
```

## Common Tasks

### Update CORS Origins
Edit `index.php`, find `$allowed_origins` array:
```php
$allowed_origins = [
    "https://yourdomain.com",
    "http://yourdomain.com",
    // Add more...
];
```

### Add New Endpoint
1. Create model in `src/models/YourModel.php`
2. Create controller in `src/controllers/YourController.php`
3. Create routes in `src/routes/yourRoutes.php`
4. Register in `index.php` route handler

### Debug Issues
Check error logs in cPanel:
- Error logs: `public_html/error_log`
- PHP errors: cPanel → Metrics → Error Log

### Connect from Frontend
```javascript
// React/Next.js example
const response = await fetch('https://yourdomain.com/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'user@example.com' })
});
const data = await response.json();
```

## Key Differences from Node.js

1. **No npm packages** - Uses PHP built-ins and MongoDB driver
2. **No server process** - Runs on Apache/cPanel
3. **No nodemon** - Changes take effect immediately
4. **Simpler routing** - Manual routing instead of Express
5. **Direct database access** - No Mongoose ORM

## Performance

- ✅ Faster startup (no Node process)
- ✅ Lower memory usage
- ✅ Native cPanel integration
- ✅ Automatic scaling with Apache

## Need Help?

See `SETUP_GUIDE.md` for detailed instructions and troubleshooting.
