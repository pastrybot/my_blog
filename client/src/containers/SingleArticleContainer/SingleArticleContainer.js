import React, { Component } from 'react';
import $ from 'jquery';
import{SingleArticleView} from '../../components';


class SingleArticleContainer extends Component {

  state= {
    isFetching: true,
    title: undefined,
    author: undefined,
    category: undefined,
    content: undefined,
    img: undefined,
    id: undefined
  }

  componentDidMount = () => this.loadArticles()

  loadArticles(){
    $.ajax({
      url: `/api/articles/${this.props.params.article_id}`,
      method: "GET"
    }).done(data => {
      console.log(data.title, 'Article Name')
      this.setState({
                  title: data.title,
                  content: data.content,
                  category: data.category,
                  author: data.author,
                  img: data.img,
                  id: data._id,
                  isFetching: false
      })
      console.log(data.title, 'article title')
    })
  }

  render(){
    return(
      <div>
        <div>
          <h3> { this.props.params.article_id }</h3>
            {!this.state.isFetching ?
                <SingleArticleView
                  title={this.state.title}
                  content={this.state.content}
                  author={this.state.author}
                  category={this.state.category}
                  img={this.state.img}
                  id={this.state.id}
                  />
                  : <h5> Finding Article...</h5>
            }
            </div>
        </div>

    )
  }
}


export default SingleArticleContainer;
