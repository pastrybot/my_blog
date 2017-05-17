import React, { Component } from 'react';
import $ from 'jquery';
import {ArticleList} from '../../components';
//stateless function that displays blog articles

class ArticlesContainer extends Component {

  state = {
    articles: undefined,
    newArticle: undefined
  }

 componentDidMount= () => this.loadArticles()

  loadArticles(){
    $.ajax({
      url: '/api/articles',
      method: 'GET'
    }).done((response) => {
      console.log(response, "I am data");
      this.setState({ articles: response.data })
    })

  }
  render() {
    return (
      <div>

        { this.state.articles ?
          <ArticleList articles={this.state.articles}/>
          : <h5>loading...</h5>
        }

      </div>
    );
  }

}


export default ArticlesContainer;
