//here we are importing our model, and creating a loop to create
//fake data for our fake database

const Article = require('../models/article');
const faker = require('faker');

module.exports = () => {

  Article.remove(err => {
    if(err){
      console.error(err, 'ERROR DELETING ARTICLES')
    }else{
      console.log('Old articles deleted')
    }

  })

  for (var i = 0; i < 20; i++) {
    var newArticle = new Article({
    title : faker.random.words(),
    category : faker.random.word(),
    author : faker.name.firstName() + ' ' + faker.name.lastName(),
    content : faker.lorem.paragraphs(),
    img : faker.image.image(),
  });

  newArticle.save();
  }

}
//ADD IMAGE FAKER LATER
