const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    author: { type: mongoose.Types.ObjectId, required: true },
    title: { type: String, required: true },
    summary: String,
    content: { type: String, required: true },
    viewNum: { type: Number, default: 0},
    commentNum: { type: Number, default: 0}
  }, 
  //时间戳
  // { timestamps: { 
  //   createdAt: "created_at", 
  //   updatedAt: 'updated_at' } }
);
ArticleSchema.set("autoIndex", false);

const Article = mongoose.model('Article',ArticleSchema)

module.exports =  Article
