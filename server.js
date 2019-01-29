const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// creating app instance
const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongoDB

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('mongoDB connected');
  })
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// user routes

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
