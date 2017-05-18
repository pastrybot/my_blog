import React, { Component } from 'react';
import {EditArticleForm} from '../../components';
import $ from "jquery";
import {browserHistory} from 'react-router'


class EditArticleContainer extends Component {
  state = {
    isFetching: true,
    title: undefined,
    content: undefined,
    category: undefined,
    author: undefined,
    img: undefined
  }

  updateField  = this.updateField.bind(this);
  componentDidMount = () => this.loadArticles()
  updateField(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    console.log('testing')
    this.setState(newState);
  }
  loadArticles(){
      $.ajax({
        url: `/api/articles/${this.props.params.article_id}`,
        method: "GET"
      }).done(data => {
        console.log(data.title, "ARTICLE NAME")
        this.setState({ title: data.title,
                        content: data.content,
                        category: data.category,
                        author: data.author,
                        img: data.img,
                        isFetching: false
        })
      })
    }
    handleSubmit = this.handleSubmit.bind(this)
    handleSubmit(event) {
      event.preventDefault();
      const data = {
        title: this.state.title,
        content: this.state.content,
        category: this.state.category,
        author: this.state.author,
        img: this.state.img,
      }
    $.ajax({
      url: `/api/articles/${this.props.params.article_id}`,
      method: "PUT",
      data: data
    }).done((response) => browserHistory.push("/articles"))
      }
    updateTitle = (event) => this.setState({title: event.target.value})
    updateImg = (event) => this.setState({img: event.target.value})
    updateContent = (event) => this.setState({content: event.target.value})
    updateCategory = (event) => this.setState({category: event.target.value})
    updateAuthor = (event) => this.setState({author: event.target.value})

  deleteById = this.deleteById.bind(this)
  deleteById(event){
    event.preventDefault();
    $.ajax({
      url: `/api/articles/${this.props.params.article_id}`,
      method: "DELETE"
    }).done((response) => browserHistory.push("/articles"))
  }

  render() {
    return(
      <div>
        <div>
          <h3> { this.props.params.article_id }</h3>
            {!this.state.isFetching ?
                      <EditArticleForm
                        handleSubmit={this.handleSubmit}
                        updateField={this.updateField}
                        title={this.state.title}
                        content={this.state.content}
                        updateContent={(event) => this.updateContent(event)}
                        category={this.state.category}
                        img={this.state.img}
                        deleteById={this.deleteById}/>
                        : <h3> Still Thinking... </h3>
        }
        </div>
      </div>
    )
  }
}
export default EditArticleContainer;
