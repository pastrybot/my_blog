import React from 'react';
import {postForm, postBtn, formHeader, label} from './styles.css';

 const PostCommentForm = (props) => {
   return (
     <div className={PostCommentForm}>
       <form className={postForm} onSubmit={(event) => props.handleSubmit(event)}>
       <h1 className={formHeader}>Leave a comment</h1>
         <div>
           <label className={label}>Title:</label>
           <input type="text" placeholder="Title" value={props.title}
             onChange={(event) => props.onChange("title", event.target.value)}/>
         </div>
         <div>
           <label className={label}>Comment:</label>
           <input type="text" placeholder="Comment" value={props.content}
             onChange={(event) => props.onChange("content", event.target.value)}/>
         </div>
           <button disabled={!props.valid} type="submit" className="postBtn">Post Comment</button>
       </form>
     </div>
   )
 }
 export default PostCommentForm;
