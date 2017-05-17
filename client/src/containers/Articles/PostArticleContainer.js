PostArticleContainer:
import React, { Component } from 'react';
import PostArticleForm from './PostArticleForm';
import $ from "jquery";
import {browserHistory} from "react-router";
class PostArticleContainer extends Component {
  state = {
    title: undefined,
    content: undefined,
    category: undefined,
    author: undefined,
    img: undefined
  }
  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit(event) {
    event.preventDefault()
    console.log(
      this.state.title,
      this.state.content,
      this.state.author,
      this.state.img,
      "title and author"
    )
  const article={title: this.state.title,
              img: this.state.img,
              content: this.state.content,
              category: this.state.category,
              author: this.state.author
            }
  $.ajax({
    url: "/api/articles",
    method: "POST",
    data: article
  }).done((response) =>
    browserHistory.push('/Articles'))
  }
  updateTitle = (event) => this.setState({title: event.target.value})
  updateImg = (event) => this.setState({img: event.target.value})
  updateCategory = (event) => this.setState({category: event.target.value})
  updateContent = (event) => this.setState({content: event.target.value})
  updateAuthor = (event) => this.setState({author: event.target.value})
  render() {
    return (
      <div>
        <PostArticleForm handleSubmit={ this.handleSubmit }
          updateTitle={this.updateTitle}
          updateAuthor={this.updateAuthor}
          updateImg={this.updateImg}
          updateCategory={this.updateCategory}
          updateContnent={this.updateContent}/>
      </div>
    )
  }
}
export default PostArticleContainer;
