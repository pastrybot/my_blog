import React from 'react';

const EditArticleForm = (props) => {
  return (
    <div className="edit-form">
      <form className="form" onSubmit={props.handleSubmit}>
        <h1 className="form-header">Edit A Post</h1>
        <div className="form-group">
          <label className="label">Title: </label>
          <input type="text" value={props.title} placeholder="Title"
            onChange={(event) => props.updateField("title", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Image: </label>
          <input type="text" value={props.img} placeholder="Enter URL"
            onChange={(event) => props.updateField("img", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Category: </label>
          <input type="text" value={props.category} placeholder="Category"
            onChange={(event) => props.updateField("category", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Author: </label>
          <input type="text" value={props.author} placeholder="Author"
            onChange={(event) => props.updateField("author", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Content: </label>
          <input type="text" value={props.content} placeholder="Content"
            onChange={(event) => props.updateField("content", event.target.value)}/>
        </div>
          {/*// <button onClick={(event) => props.updateContent(event)} className="btn btn-default">Update Article +</button>*/}
          <button onClick={(event) => props.deleteById(event)} className="btn btn-default">Delete Article -</button>

          <button type="submit" className="edit-button">Edit Post</button>
      </form>
    </div>


  )
}
export default EditArticleForm;
