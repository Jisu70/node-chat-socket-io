const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const PORT = 3000;
const server = http.createServer(app);
const io = require('socket.io')(server);

// Using static folder
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Socket.io
io.on('connection', (socket) => {
  console.log('Connected');
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('Server was listen on port 3000 ');
});
