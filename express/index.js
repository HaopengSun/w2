const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/parks', (req, res) => {
  res.send('The parks you have seen');
});
app.listen(port, () => {
  console.log('Server running!')
});