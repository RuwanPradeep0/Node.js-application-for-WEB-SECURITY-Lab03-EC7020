// app.js
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const homeController = require('./controllers/homeController');
const httpsConfig = require('./config/httpsConfig');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', homeController.home);
app.get('/api/data', homeController.apiData);

// HTTP Server
const httpServer = http.createServer(app);
httpServer.listen(3000, () => {
  console.log('HTTP server running on http://localhost:3000');
});

// HTTPS Server (use SSL certificate)
const httpsServer = https.createServer(httpsConfig, app);
httpsServer.listen(3001, () => {
  console.log('HTTPS server running on https://localhost:3001');
});
