const express = require('express')
const Router = require('./route')
const mongoose = require("mongoose");
const url = require("./config/default").mongodb
const bodyParser = require('body-parser')
const path = require('path')

const app = express();


//连接数据库
mongoose.connect(url,{ useNewUrlParser: true });
mongoose.Promise = global.Promise

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


// app.use(bodyParser.json());

//设置静态文件夹
app.use('/public',express.static('public'))
app.set('views','./public/index.html')

app.use((err,req,res,next)=>{
  res.status(404).send({ error: err.message })
})

//路由
Router(app);


app.listen(3000,function(){
  console.log('server running at 3000...')
})