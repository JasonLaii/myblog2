const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: { type: mongoose.Types.ObjectId, required: true },
  comment: { type: String, required: true }
});

CommentSchema.set("autoIndex", false);


const Comment = mongoose.model('Comment',CommentSchema)

module.exports ={
  Comment
}