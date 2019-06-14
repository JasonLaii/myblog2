
module.exports = function(app){

  app.use('/signup',require('./api/user'))
  app.use('/',function(req,res,next){
    res.render("THIS IS BACKEND PAGES.")
  })
  
}