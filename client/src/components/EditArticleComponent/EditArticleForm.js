import React from 'react';

const EditArticleForm = (props) => {
  return (
    <div className="edit-form">
      <form className="form" onSubmit={props.handleSubmit}>
        <h1 className="form-header">Edit A Post</h1>
        <div className="form-group">
          <label className="label" for="title">Title: </label>
          <input type="text" value={props.name} placeholder="Title"
            onChange={(event) => props.updateField("title", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label" for="img">Image: </label>
          <input type="text" value={props.img} placeholder="Enter URL"
            onChange={(event) => props.updateField("img", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label" for="category">Category: </label>
          <input type="text" value={props.category} placeholder="Category"
            onChange={(event) => props.updateField("Category", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label" for="author">Author: </label>
          <input type="text" value={props.author} placeholder="Author"
            onChange={(event) => props.updateField("Author", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label" for="content">Content: </label>
          <input type="text" value={props.content} placeholder="content"
            onChange={(event) => props.updateField("Content", event.target.value)}/>
        </div>
          <button onClick={(event) => props.updateArticle(event)} className="btn btn-default">Update Article +</button>
          <button onClick={(event) => props.removeArticle(event)} className="btn btn-default">Delete Article -</button>

          <button type="submit" className="edit-button">Post Edits</button>
      </form>
    </div>
  )
}
export default EditArticleForm;
