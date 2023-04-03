'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  console.log(`Called / from ${ipAddress}`);
  res.send('Hello World');
});

app.get('/health200', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  console.log(`Called /health200 from ${ipAddress}`);
  res.send('Healthy 200');
});

app.get('/health200a', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  console.log(`Called /health200a from ${ipAddress}`);
  res.send('Healthy 200a');
});

app.get('/health200b', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  console.log(`Called /health200b from ${ipAddress}`);
  res.send('Healthy 200b');
});

app.get('/health200c', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  console.log(`Called /health200c from ${ipAddress}`);
  res.send('Healthy 200c');
});

app.get('/health200d', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  console.log(`Called /health200d from ${ipAddress}`);
  res.send('Healthy 200d');
});

app.get('/health200e', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  console.log(`Called /health200e from ${ipAddress} will return 200`);
  res.send('Healthy 200e');
});

app.get('/health503', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  console.log(`Called /health503 from ${ipAddress}`);
  res.status(503);
  res.send('Healthy 503');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});