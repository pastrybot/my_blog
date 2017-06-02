import React, { Component } from 'react';
import {PostCommentForm, CommentList} from '../../components';
import $ from "jquery";
import {browserHistory} from "react-router";


 class PostCommentContainer extends Component {
   state = {
     title: undefined,
     content: undefined,
     comments: undefined,
     isLoading: true,
     valid: false
   }

   componentDidMount = () => this.loadComments()

   loadComments(){
     console.log("loading comments");
     $.ajax({
       url: `/api/articles/${this.props.id}`,
       method: "GET",
     }).done((response) => {
       console.log("find the comments container", this.props.id, "find comment", response);
       this.setState({comments: response.comments, isLoading: false})
       console.log(this.state.comments);
     }
     )
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
       valid: (this.state.title !== undefined ) && (this.state.content !== undefined )
      })



   }

   handleSubmit = this.handleSubmit.bind(this)
   handleSubmit(event) {
     event.preventDefault()
     console.log(
       this.state.title,
       this.state.content,
       "New comment"
     )
   const comment={title: this.state.title,
       content: this.state.content,
             }

   const newComments = this.state.comments;
        newComments.push(comment);
        this.setState({comments: newComments})


   $.ajax({
     url: `/api/articles/comment/${this.props.id}`,
     method: "POST",
     data: comment
   }).done((response) =>
      this.setState({title: "", content: ""})
  )}

   render() {
     return (
       <div>
       {!this.state.isLoading ? <CommentList comments={this.state.comments} /> : null}
         <PostCommentForm
         title={this.state.title}
         content={this.state.content}
         handleSubmit={ this.handleSubmit }
         onChange={ this.onChange }
         valid={ this.state.valid }
           />
       </div>
     )
   }
 }
 export default PostCommentContainer;
