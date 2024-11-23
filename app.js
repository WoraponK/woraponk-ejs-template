const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('layout', { title: 'Home', page: 'pages/home' });
});
app.get('/about', (req, res) => {
  res.render('layout', { title: 'About', page: 'pages/about' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});