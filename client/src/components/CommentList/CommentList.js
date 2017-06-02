import React from 'react';
import { Link } from 'react-router';
import {PostCommentContainer} from '../../containers'

 const CommentList = (props) => {
   return (
     <div className="comment">
     { props.comments.length > 0 ? props.comments.map((item, index) => {
       return (
         <div key={index} className="">
         <h4>User Comments</h4>
         <div className="comment-container">
           <p className="content">{item.content}</p>
         </div>
         </div>
         )
       }): <h1> No comment Yet </h1>
     }
     </div>
   )

 }

 export default CommentList;
