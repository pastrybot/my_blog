import React, { Component } from 'react';
import $ from 'jquery';
import ArticleList from './ArticleList';
//stateless function that displays a list of heroes

class ArticlesContainer extends Component {

  state = {
    articles: undefined,
    newArticle: undefined
  }

 componentDidMount= () => this.loadArticle()

  loadHeroes(){
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
          <ArticleList heroes={this.state.articles}/>
          : <h5>loading...</h5>
        }

      </div>
    );
  }

}


export default ArticlesContainer;
