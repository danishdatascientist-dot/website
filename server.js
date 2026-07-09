const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Set environment
const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0'; // Allow all IPs (important for cPanel hosting)
const port = process.env.PORT || 3000; // Port configured in cPanel

// Create Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Prepare app
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('❌ Server Error:', err);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  }).listen(port, () => {
    console.log(`✅ Next.js is running at http://${hostname}:${port}`);
  });
});
