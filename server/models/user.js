const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  account: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["x", "m", "f"], required: true },
  nickname: String,
  avatar: String,
  bio: String
});
UserSchema.set("autoIndex", false);


const User = mongoose.model('User',UserSchema);

module.exports =  User