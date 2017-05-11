var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  title: String,
  category: String,
  author: String,
  content: String

});

ArticleSchema.methods.loadData = function(data){
  this.title    = data.title ? data.title : this.title;
  this.category = data.category ? data.category : this.category;
  this.author   = data.author ? data.author : this.author;
  this.content  = data.content ? data.content : this.content;
}

module.exports = mongoose.model('Article', ArticleSchema);
