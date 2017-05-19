//PostArticleContainer:
import React, { Component } from 'react';
import {PostArticleForm} from '../../components';
import $ from "jquery";
import {browserHistory} from "react-router";


class PostArticleContainer extends Component {
  state = {
    title: undefined,
    content: undefined,
    category: undefined,
    author: undefined,
    img: undefined,
    valid: false
  }
  updateField(name, value){
    const newState = {};
    newState[name]=value;
    this.setState(newState);
  }
  
  onChange = this.onChange.bind(this);
  onChange(name, value){
    this.updateField(name, value);
    this.validate();

  }
  validate(){
    this.setState({
      valid: (this.state.title !== undefined ) && (this.state.content !== undefined) && (this.state.category !== undefined) && (this.state.author !== undefined) && (this.state.img !== undefined)
    })



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

  render() {
    return (
      <div>
        <PostArticleForm
        handleSubmit={ this.handleSubmit }
        onChange={ this.onChange }
        valid={ this.state.valid }
          />
      </div>
    )
  }
}
export default PostArticleContainer;
