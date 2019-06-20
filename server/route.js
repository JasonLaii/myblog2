


module.exports = function(app){
  app.use('/api',require('./api/user'));
  app.use('/signup',require('./api/user'))
}