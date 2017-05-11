var express = require('express');
var Router = express.Router();
var Article = require('../models/article');
var async = require('async');



Router.route('/')
  .get(function(req, res) {
    Article.find(function(err, data) {
      if (err) {
        res.send(err)
      } else {
        res.json({
          message: 'Found your article',
          data
        });
      }
    });
  });
Router.route('/')
  .post(function(req, res){
      var newArticle = new Article();
      console.log(req.body)
      newArticle.loadData(req.body);
      newArticle.save(function(err, na){
        if (err) throw err;
        res.json(na)
      });

  });

Router.route('/:article_id')
  .get(function(req, res){
    Article.findById(req.params.article_id, function(err, data){
      if (err){
        console.log(err);
      }else{
        res.json(data);
      }
    })
  });

Router.route('/:article_id')
  .put(function (req, res) {
      Article.findById( req.params.article_id, function (err, article) {
        if (!article) return res.status(404);
        article.loadData(req.body);
        article.save(function(e) {
          if (e) {
            res.status(500).send(e)
          } else {
            res.json({ message: 'Article updated!', article});
          }
        })
      })
    })

Router.route('/:article_id')
  .delete(function(req, res){
    Article.remove({
      _id: req.params.superhero_id
    }, function(err){
      if(err){
        console.log(err)
      }else{
        res.send('Article Deleted!')
      }
    })
  })





  module.exports = Router;
