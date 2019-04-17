const express = require("express");
const bodyParser = require("body-parser");
var logger = require('morgan');
const mongoose = require("mongoose");

const pathname = "localhost";
const port = 3000

var dinoRouter = require('./routes/dinoRouter');

const url = 'mongodb://localhost:27017/glaciation';
const connect = mongoose.connect(url)
connect.then((db) => {
  console.log("Connected correctly to server")
},(err)=>{console.log(err); })

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port,()=>{
    console.log(`app is listening at http://${pathname}:${port}...`)
})