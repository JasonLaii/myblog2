


module.exports = function(app){
  app.use('/api/signup',require('./api/user'));
  app.use('/api',require('./api/user'))
}