import React, { Component } from 'react';
import $ from 'jquery';
import {ArticleList} from '../../components';
//stateless function that displays blog articles

class ArticlesContainer extends Component {

  state = {
    articles: undefined,
    newArticle: undefined,
    text: undefined
  }

 componentDidMount= () => this.loadArticles()


  loadArticles(){
    $.ajax({
      url: '/api/articles',
      method: 'GET'
    }).done((response) => {
      let articles = response.data.reverse();
       //reverses our array of articles,
       //to put the newest addition at the top of the list
      console.log(response, "I am data");
      this.setState({ articles: articles })
    })
  }

  updateText = (event) => this.setState({ text: event.target.value })

  submitNote = this.submitNote.bind(this)

  submitNote(event, _id){
    event.preventDefault();
    let note = {content: this.state.text}
    $.ajax({
      url:  `/api/articles/note/${_id}`,
      method: 'POST',
      data: note
    }).done((response) => this.loadArticles())
  }


  render() {
    return (
      <div>

        { this.state.articles ?
          <ArticleList articles={this.state.articles}
                       updateText={this.updateText}
                       submitNote={this.submitNote}
                      />
          : <h5>loading...</h5>
        }

      </div>
    );
  }

}


export default ArticlesContainer;
