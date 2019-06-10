const express = require('express')
const userRoutes = require('./api/user')

const app = express();

app.use('/',userRoutes);



app.listen(8080,function(){
  console.log('server running at 80080...')
})