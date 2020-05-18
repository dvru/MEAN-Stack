const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts")


const app = express();

mongoose.connect("mongodb+srv://damini:NHV0TxJsTt9QC8xu@cluster0-86cg6.mongodb.net/node-angular?retryWrites=true", { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection Failed!')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use("/images", express.static());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
  "Access-Control-Allow-Methods",
  "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
})

app.use("/api/posts", postsRoutes);


module.exports = app;

// NHV0TxJsTt9QC8xu
