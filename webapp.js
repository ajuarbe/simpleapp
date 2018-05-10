const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/andrew', (req, res) => {
  res.send('Hello Andrew!');
});
app.get('/class', (req, res) => {
  res.send('<h1>Class Response</h1><h3>What Up!</h3>');
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));