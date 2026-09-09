import { useState } from 'react'


const posts = [
  { id: 1, content: "Just shipped a new feature — feels good to finally close this ticket out.", time: '2h ago', likes: 24, comments: 4 },
  { id: 2, content: "Coffee, code, repeat.", time: '1d ago', likes: 51, comments: 9 },
]

function Profile() {
  const [activeTab, setActiveTab] = useState('posts')

  return (
    <section className="profile-page">
      <div className="profile-cover" />

      <div className="profile-header">
        <div className="profile-avatar-lg avatar-blue">JD</div>
        <button className="profile-edit-btn" type="button" onClick={() => {/* route to /settings or open edit modal */ }}>
          Edit profile
        </button>
      </div>

      <div className="profile-info">
        <h1>Jane Doe</h1>
        <p className="profile-handle">@janedoe</p>
        <p className="profile-bio">
          Building things on the internet. Sharing what I learn along the way.
        </p>
        <p className="profile-meta">
          <span>📍 Kathmandu</span>
          <span>·</span>
          <span>Joined March 2024</span>
        </p>
        <div className="profile-stats">
          <span><strong>128</strong> Posts</span>
          <span><strong>3.2k</strong> Followers</span>
          <span><strong>412</strong> Following</span>
        </div>
      </div>

      <div className="profile-tabs">
        <button
          className={'profile-tab' + (activeTab === 'posts' ? ' active' : '')}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </button>
        <button
          className={'profile-tab' + (activeTab === 'media' ? ' active' : '')}
          onClick={() => setActiveTab('media')}
        >
          Media
        </button>
        <button
          className={'profile-tab' + (activeTab === 'likes' ? ' active' : '')}
          onClick={() => setActiveTab('likes')}
        >
          Likes
        </button>
      </div>

      <div className="profile-posts">
        {activeTab === 'posts' && posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="avatar avatar-blue">JD</div>
            <div className="post-content">
              <div className="post-header">
                <strong>Jane Doe</strong>
                <span>@janedoe · {post.time}</span>
              </div>
              <p>{post.content}</p>
              <div className="post-actions">
                <button>❤️ <span>{post.likes}</span></button>
                <button>💬 <span>{post.comments}</span></button>
                <button>🔁 <span>Share</span></button>
              </div>
            </div>
          </div>
        ))}

        {activeTab === 'media' && <p className="profile-empty">No media yet.</p>}
        {activeTab === 'likes' && <p className="profile-empty">No likes yet.</p>}
      </div>
    </section>
  )
}

export default Profile