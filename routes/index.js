const express = require('express');
const ArticleRoutes = require('./articles/articles');

/* GET test route. */
module.exports = (app) => {
  app.get('/api/articles', ArticleRoutes.getAll);
  app.post('/api/articles', ArticleRoutes.makeNew);
  app.get('/api/articles/:article_id', ArticleRoutes.getById);
  app.delete('/api/articles/:article_id', ArticleRoutes.remove);
  app.put('/api/articles/:article_id', ArticleRoutes.edit);
  app.post('/api/articles/comment/:article_id', ArticleRoutes.makeComment);
};
