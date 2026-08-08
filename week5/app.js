// 1. IMPORTING EXPRESS
const express = require('express');

// 2. INITIALIZING THE APP
const app = express();

// 3. SETTING THE PORT
const PORT = 3000;

// 4. THE HOME ROUTE (GET Request)
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express</h1><p>You have reached the Home Page.</p>');
});

// 5. THE ABOUT ROUTE
app.get('/about', (req, res) => {
    res.send('This server was built as a learning exercise for Express.js by SVECW AI Department!');
});

// 6. THE DATA (JSON) ROUTE
app.get('/api/status', (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "The server is healthy and responding"
    });
});

// 7. STARTING THE SERVER
app.listen(PORT, () => {
    console.log(`Success! Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.');
});