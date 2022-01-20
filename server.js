const express = require('express');
const app = express();

// set the view engin to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// index page
app.get('/', (req, res) => {
  res.render('pages/index');
});

// login page
app.get('/login', (req, res) => {
  res.render('pages/login');
});

// port server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
