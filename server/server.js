const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New connection');
  socket.on('disconnect',(socket) => {
    console.log('Disconnected from a client');
  })
});

server.listen(port, () => {
  console.log(`App listening to port ${port}`);
});