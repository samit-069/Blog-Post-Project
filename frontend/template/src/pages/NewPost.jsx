import { useState } from 'react'
import './Newpost.css'

function NewPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('New post:', { title, content })
  }

  const handleDiscard = () => {
    setTitle('')
    setContent('')
  }

  return (
    <div className="new-post-page">
      <div className="new-post-card">
        <div className="new-post-heading">
          <h1>Create a new post</h1>
          <p>Share your thoughts with the world.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="new-post-field">
            <label htmlFor="new-post-title">Title</label>
            <input
              id="new-post-title"
              type="text"
              placeholder="Give your post a catchy title…"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="new-post-field">
            <label htmlFor="new-post-content">Content</label>
            <textarea
              id="new-post-content"
              placeholder="Write your post here…"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={9}
            />
            <span className="new-post-hint">{content.length} characters</span>
          </div>

          <div className="new-post-actions">
            <button
              type="button"
              className="new-post-discard"
              onClick={handleDiscard}
            >
              Discard
            </button>
            <button className="new-post-submit" type="submit">
              Publish post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewPost
