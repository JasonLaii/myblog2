const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  account: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["x", "m", "f"], default: 'x' },
  nickname: {type: String, default: ''},
  avatar: {type: String, default: 'image/avatar.jpg'},
  bio: {type: String, default: ''}
});
UserSchema.set("autoIndex", false);


const User = mongoose.model('User',UserSchema);

module.exports =  User