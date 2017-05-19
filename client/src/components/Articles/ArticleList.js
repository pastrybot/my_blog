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
                <Link className="btn btn-default" to={`/articles/${item._id}`}>View on single page</Link>
                <ul className='blog-text'>
                  <li>{ item.category }</li>
                  <li>{ item.author }</li>
                  <li>{ item.content }</li>
                  <img src={ item.img }/>
                </ul>

                <Link className="btn btn-warning" to={`/editPost/${item._id}`}>Edit</Link>
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
