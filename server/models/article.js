const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  author: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true },
  summary: String,
  content: { type: String, required: true },
  viewNum: Number,
  commentNum: Number
  
});
ArticleSchema.set("autoIndex", false);

const Article = mongoose.model('Article',ArticleSchema)

module.exports = {
  Article
}