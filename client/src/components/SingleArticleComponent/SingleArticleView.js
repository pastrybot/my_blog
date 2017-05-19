import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

const SingleArticleView = (props) => {
  return (
    <div>
      <div>



            <div className='blog-panel'>
              <h3 className='blog-title'>{ props.title }</h3>
                <ul className='blog-text'>
                  <li>{ props.author }</li>
                  <li>{ props.category }</li>
                  <img src={ props.img }/>
                  <li>{ props.content }</li>
                </ul>
                <Link className="btn btn-warning" to={`/editPost/${props.id}`}>Edit</Link>
            </div>

        }
      )
    }
      </div>

    </div>
  )

}


export default SingleArticleView;
