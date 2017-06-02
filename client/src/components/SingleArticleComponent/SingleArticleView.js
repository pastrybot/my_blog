import React from 'react';
import {Link} from 'react-router';
import CommentList from '../CommentList/CommentList'
import {PostCommentContainer} from '../../containers';
import {myBtn} from "./styles.css";





const SingleArticleView = (props) => {

    return (
      <div>
        <div>
         <div className='blog-panel'>
           <h3 className='blog-title'>{ props.article.title }</h3>
             <ul className='blog-text'>
               <li>{ props.article.author }</li>
                <li>{ props.article.category }</li>
                <img src={ props.article.img } alt='error'/>
                <li>{ props.article.content }</li>
              </ul>
             <div>
               <PostCommentContainer id={props.article._id} />
             </div>
             <Link className={myBtn} to={`/articles/editPost/${props.article._id}`}>Edit this post</Link>
          </div>

        </div>

      </div>
   )

 }


 export default SingleArticleView;
