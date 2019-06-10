const mongoose = require('mongoose');
// const env = process.env.NODE_ENV || 'development'
const url = require('../config/default').mongodb

mongoose.connect(url);
var db = mongoose.connection;

db.on('error',function(err){
  console.log('found err:' + err)
});
db.on('connected',function(){
    console.log('connect successfully.')
})
db.on('disconnected',function(){
  console.log('disconnected.')
})


const Schema = mongoose.Schema;

//user model
const UserSchema = new Schema({
  account: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type:String, enum:['x','m','f'], required:true },
  nickname: String,
  avatar: String,
  bio: String
});
UserSchema.set('autoIndex',false);


//article model
const ArticleSchema = new Schema({
  author: {type: mongoose.Types.ObjectId, required: true},
  title: { type: String, required: true},
  summary: String,
  content: { type: String, required: true},
  viewNum: Number,
  commentNum: Number
});
ArticleSchema.set('autoIndex',false)


//comment model
const CommentSchema = new Schema({
  author: {type: mongoose.Types.ObjectId, required:true},
  comment: { type: String, required: true}
});
CommentSchema.set('autoIndex',false)

const User = mongoose.model('User',UserSchema);
const Article = mongoose.model("Article", ArticleSchema);
const Comment = mongoose.model("Comment", UserSchema);

module.exports = {
  User,
  Article,
  Comment
}