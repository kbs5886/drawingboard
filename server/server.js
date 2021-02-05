const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.process || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
  });

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});