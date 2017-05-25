var Comment = require('../../models/comment')
var Article = require('../../models/article');
var async = require('async');



exports.getAll = (req, res) => {
  //exports to our index
    Article.find()
    .populate('comments')
    .exec((err, data) => {
      if(err) throw err;
      res.send({data})
    })
  };



//this constructor uses our schema to actually make the data
exports.makeNew = (req, res) => {

      var newArticle = new Article();
      console.log(req.body)
      newArticle.loadData(req.body);
      newArticle.save(function(err, na){
        if (err) throw err;
        res.json(na)
      });


}

exports.getById = (req, res) => {

    Article.findById(req.params.article_id)
    .populate('comments')
    .exec((err, data) => {
       if (err) throw err;
        res.send(data);
      })
    }



exports.edit = (req, res) => {
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
    }

exports.remove = (req, res) => {
    Article.remove({
      _id: req.params.article_id
    }, function(err){
      if(err){
        console.log(err)
      }else{
        res.send('Article Deleted!')
      }
    })
}

//find article by id, upon success create a new comment,
// save new comment, then take newly made comment and shove him into article.comment
//then save article
exports.makeComment = (req, res) => {
  Article.findById(req.params.article_id, (err, article) => {
      if(err) throw err;
      const newComment = new Comment();
      newComment.loadData(req.body);
      newComment.save((err, savedComment) => {
        if (err) throw err;
        article.comments.push(savedComment);
        article.save((err, savedArticle) => {
          if(err) throw err;
          res.send({data: savedArticle})
        })
      })
    })
  }
