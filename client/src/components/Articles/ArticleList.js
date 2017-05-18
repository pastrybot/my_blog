import React from 'react';
import {Link} from 'react-router';


const ArticleList = (props) => {
 return (
<div>
   <h1 className="title">Bob Lawblaws Law Blog</h1>
      <div className="blog-flex">

        { props.articles.map((item, index) => {
            return (
            <div key={index} className='blog-panel'>
               <h2 className='blog-title'>{ item.title }</h2>
                <ul className='blog-text'>
                  <li>{ item.category }</li>
                  <li>{ item.author }</li>
                  <li>{ item.content }</li>
                  <li>{ item.img }</li>
                </ul>
                <Link className="btn btn-warning" to={`/editPost/${item._id}`}>Edit</Link>
            </div>
            )
          }
        )}

      </div>
      </div>
    )
  }
export default ArticleList;
