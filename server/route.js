


module.exports = function(app){
  app.use('/api/signup',require('./api/user'));
  app.use('/',(req,res)=>{
    res.send("BACKEND")
  })
}