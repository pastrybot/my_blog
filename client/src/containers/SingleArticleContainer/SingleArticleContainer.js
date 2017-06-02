import React, { Component } from 'react';
import $ from 'jquery';
import {SingleArticleView} from '../../components';


class SingleArticleContainer extends Component {

  state = {
    article: undefined,
    buttonColor: false
    }
   loadArticle = this.loadArticle.bind(this)
   componentDidMount = () => this.loadArticle()
   toggleColor = () => this.setState({buttonColor: !this.state.buttonColor})

  loadArticle(){
    $.ajax({
      url: `/api/articles/${this.props.params.article_id}`,
      method: "GET"
    }).done((response) => {
       console.log(response, "new comment")
       this.setState({article: response})
      })
    }


    render() {
       console.log("finding nemo ", this.state.article);
       return (
         <div className="article-container">
           { this.state.article
             ? <SingleArticleView
             toggleColor={this.toggleColor}
             buttonColor={this.state.buttonColor}
             article={this.state.article}/>
             : <h5>loading...</h5> }
         </div>
       );
      }
    }



export default SingleArticleContainer;
