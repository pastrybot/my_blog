import React from 'react';
import {Link} from 'react-router';
import {body, listFlex, articlePanel, articleTitle, myBtn,
         image, category, content, author} from './styles.css';


const ArticleList = (props) => {
 return (
<div>
   <h1 className="title">Bob Lawblaws Law Blog</h1>
      <div className={listFlex}>

        { props.articles.map((item, index) => {
            return (
            <div key={index} className={articlePanel}>
               <h2 className={articleTitle}>{ item.title }</h2>
               <img className={image} src={ item.img } alt='could not render'/>
                <ul className='blog-text'>
                  <li className={category}>{ item.category }</li>
                  <li className={author}>{ item.author }</li>
                  <li className={content}>{ item.content }</li>
                </ul>
                <Link className={myBtn} to={`/articles/${item._id}`}>View on single page</Link>
                <Link className={myBtn} to={`/articles/editPost/${item._id}`}>Edit</Link>
                {/* the ${item._id} is how you pass the item by id to the url. */}
            </div>

            )
          }
        )}

      </div>
      </div>
    )
  }
export default ArticleList;
