import React from 'react';

const PostArticleForm = (props) => {
  return (
    <div className="post-form">
      <form className="form" onSubmit={(event) => props.handleSubmit(event)}>
      <h1 className="form-header">Blog Posts</h1>
        <div className="form-group">
          <label className="label">Title:</label>
          <input type="text" placeholder="Title"
            onChange={(event) => props.onChange("title", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Image:</label>
          <input type="text" placeholder="Enter URL"
            onChange={(event) => props.onChange("img", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Category:</label>
          <input type="text" placeholder="Category"
            onChange={(event) => props.onChange("category", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Author:</label>
          <input type="text" placeholder="Author"
            onChange={(event) => props.onChange("author", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Content here:</label>
          <input type="text" placeholder="Content"
            onChange={(event) => props.onChange("content", event.target.value)}/>
        </div>
          <button disabled={!props.valid} type="submit" className="btn btn-default">Post</button>
      </form>
    </div>
  )
}
export default PostArticleForm;
