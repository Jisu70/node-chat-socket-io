const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const server = app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('Server is listening on port 3000');
});
const io = require('socket.io')(server);

// Using static folder
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.io
io.on('connection', (socket) => {
  console.log('Connected...')
  socket.on('message', (msg) => {
      socket.broadcast.emit('message', msg)
  })

})
