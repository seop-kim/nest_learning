const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/post', (req, res) => {
  res.send('Post Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

