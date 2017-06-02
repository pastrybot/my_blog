import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
require('bootstrap/dist/css/bootstrap.css');

import App from './App';
import {HomeContainer,
        AboutContainer,
        ArticlesContainer,
        EditArticleContainer,
        PostArticleContainer,
        SingleArticleContainer,
        CommentsContainer} from './containers';
import SignUpContainer from './userAuth/SignUpContainer';
import LoginContainer from './userAuth/LoginContainer';
//this is where we define the path.  You can name the path anything you want.

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={HomeContainer} />
      <Route path="/about" component={AboutContainer} />
      <Route path="/articles" component={ArticlesContainer} />
      <Route path="/articles/:article_id" component={SingleArticleContainer} />
      <Route path="/newPost" component={PostArticleContainer} />
      <Route path="/articles/editPost/:article_id" component={EditArticleContainer} />
      <Route path="/articles/comments/article_id" component={CommentsContainer} />
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/login" component={LoginContainer} />

      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
