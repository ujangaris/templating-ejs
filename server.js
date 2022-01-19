const express = require('express');
const app = express();

// set the view engin to ejs
app.set('view engine', 'ejs');

// port server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
