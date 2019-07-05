


module.exports = function(app){
  app.use('/api',require('./api/user'));
  // app.use('/signin',require('./api/user'));
  // app.use('/api/signin',require('./api/user'))


  app.use('/api',require('./api/article'));
  app.use('/api',require('./api/comment'));
  // app.use('/post',require('./api/article'));
  // app.use('/api/post',require('./api/article'))
}