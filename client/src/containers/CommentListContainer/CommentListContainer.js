import React, { Component } from 'react';
import $ from 'jquery';
import {CommentList} from '../../components';

class CommentListContainer extends Component {
   state = {
     comment: undefined,
     newComment: undefined,
     text: undefined
   }
   submitComment = this.submitComment.bind(this)
   loadComment = this.loadComment.bind(this)

   componentDidMount = () => this.loadArticles()

 // create a () that gets single blog posts from DB
  loadArticles(){
       $.ajax({
         url: `/api/articles/${this.props.params.article_id}`,
         method: "GET"
       }).done(response => {
         console.log(response);
         this.setState({ articles: response.data })
       })
     }

   submitComment(event, _id){
     event.preventDefault();
     if(!this.state.text || this.state.text.length < 1){
       alert("Please fill out form")
     return
     }
     let comment = {content: this.state.text}
     $.ajax({
       url: `/api/articles/comment/${_id}`,
       method: "POST",
       data: comment
     }).done((response) => {
       this.setState({text: ""})
       this.loadArticles()
     })
   }

 // render a component that displays our data
   render() {
     return (
       <div className="article-container">
        <h3> { this.state.article }</h3>
         ? <CommentList
          />
         : <h5>loading...</h5> }
     </div>
   );
   }
 }

 export default CommentListContainer;
