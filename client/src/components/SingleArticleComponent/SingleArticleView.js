import React from 'react';
import {Link} from 'react-router';


const SingleArticleView = (props) => {
  return (
    <div>
      <div>



            <div className='blog-panel'>
              <h3 className='blog-title'>{ props.title }</h3>
                <ul className='blog-text'>
                  <li>{ props.author }</li>
                  <li>{ props.category }</li>
                  <img src={ props.img } alt='error'/>
                  <li>{ props.content }</li>
                </ul>
                <Link className="btn btn-warning" to={`/editPost/${props.id}`}>Edit</Link>
                <Link className="btn btn-primary" to={`/articles`}>Back to blog</Link>
            </div>

        }
      )
    }
      </div>

    </div>
  )

}


export default SingleArticleView;
