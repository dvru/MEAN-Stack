const express = require('express');

const app = express();


app.use('/api/posts', (req, res, next) => {
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
