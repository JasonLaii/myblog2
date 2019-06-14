const express = require('express')
const Router = require('./route')
const mongoose = require("mongoose");
const url = require("./config/default").mongodb


const app = express();

//连接数据库
mongoose.connect(url,{ useNewUrlParser: true });
let db = mongoose.connection;

db.on("error", function(err) {
  console.log("found err:" + err);
});
db.on("connected", function() {
  console.log("connect successfully.");
});
db.on("disconnected", function() {
  console.log("disconnected.");
});


//路由
Router(app);


app.listen(3000,function(){
  console.log('server running at 3000...')
})