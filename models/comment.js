var mongoose = require('mongoose');

const Schema = mongoose.Schema;
//define the schema
const CommentSchema = new Schema({
  title: {required: true, type: String},
  content: {required: true, type: String}
});

//export mongoose model

CommentSchema.methods.loadData = function(data){
  this.title = data.title;
  this.content = data.content;
}

//export mongoose model
module.exports = mongoose.model('Comment', CommentSchema);
