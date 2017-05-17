import React from 'react';

const PostArticleForm = (props) => {
  return (
    <div className="post-form">
      <form className="form" onSubmit={(event) => props.handleSubmit(event)}>
      <h1 className="form-header">Blog Posts</h1>
        <div className="form-group">
          <label className="label" for="title">Title:</label>
          <input type="text" placeholder="Title"
            onChange={(event) => props.updateTitle(event)}/>
        </div>
        <div className="form-group">
          <label className="label" for="img">Image:</label>
          <input type="text" placeholder="Enter URL"
            onChange={(event) => props.updateImg(event)}/>
        </div>
        <div className="form-group">
          <label className="label" for="category">Category:</label>
          <input type="text" placeholder="Category"
            onChange={(event) => props.updateCategory(event)}/>
        </div>
        <div className="form-group">
          <label className="label" for="author">Author:</label>
          <input type="text" placeholder="Author"
            onChange={(event) => props.updateAuthor(event)}/>
        </div>
        <div className="form-group">
          <label className="label" for="content">Content here:</label>
          <input type="text" placeholder="Content"
            onChange={(event) => props.updateContent(event)}/>
        </div>
          <button type="submit" className="post-submit">Post</button>
      </form>
    </div>
  )
}
export default PostArticleForm;
