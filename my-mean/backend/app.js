const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
  "Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
})

app.post("/api/posts", (req, res, next) => {
  console.log();
});

app.use("/api/posts", (req, res, next) => {
    const posts = [
      { id: 'sfsffd',
        title: 'First server side post',
        content: 'Coming from the Server'
      },
      { id: 'ffsdfsdfd',
      title: 'Secons server side post',
      content: 'Now this is Coming from the Server!'
      },
    ];
    res.status(200).json({
      message: 'Posts Fetched Successfully!',
      posts: posts
  });
});

module.exports = app;
