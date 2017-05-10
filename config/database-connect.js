var mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://localhost/my_blog');
  console.log('Database running')
}
