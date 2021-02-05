const app = require('express')();
const http = require('http').createServer(app);

const PORT = process.env.process || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

http.listen(PORT, () => {
  console.log('listening on *:3000');
});