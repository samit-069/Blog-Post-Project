import { useState } from 'react'

const initialPosts = [
  {
    id: 1,
    author: 'Sarah Chen',
    initials: 'SC',
    handle: 'sarahchen',
    avatarColor: 'avatar-blue',
    time: '2h ago',
    content: 'Just wrapped up a great trip to the mountains. Nothing beats fresh air and no notifications for a few days. 🏔️',
    likes: 12,
    liked: false,
    comments: 3,
  },
  {
    id: 2,
    author: 'Dev Patel',
    initials: 'DP',
    handle: 'devpatel',
    avatarColor: 'avatar-green',
    time: '5h ago',
    content: 'Finally shipped the feature I\'ve been working on for three weeks. Small wins matter. The diff was 2,400 lines but totally worth it.',
    likes: 34,
    liked: false,
    comments: 8,
  },
  {
    id: 3,
    author: 'Maria Lopez',
    initials: 'ML',
    handle: 'marialopez',
    avatarColor: 'avatar-purple',
    time: '1d ago',
    content: 'Coffee recommendations for a rainy day? Looking for something new to try. Currently obsessed with Ethiopian pour-over. ☕',
    likes: 5,
    liked: false,
    comments: 11,
  },
  {
    id: 4,
    author: 'James Kim',
    initials: 'JK',
    handle: 'jameskim',
    avatarColor: 'avatar-dark',
    time: '1d ago',
    content: 'Reading "A Philosophy of Software Design" for the second time. Every re-read reveals something new. Highly recommend for anyone building complex systems.',
    likes: 48,
    liked: false,
    comments: 6,
  },
]

function Home() {
  const [posts, setPosts] = useState(initialPosts)

  const toggleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    )
  }

  return (
    <section className="feed">
      <h1>Home</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className={'avatar ' + post.avatarColor}>{post.initials}</div>
          <div className="post-content" style={{ flex: 1, minWidth: 0 }}>
            <div className="post-header">
              <strong>{post.author}</strong>
              <span>@{post.handle} · {post.time}</span>
            </div>
            <p>{post.content}</p>
            <div className="post-actions">
              <button
                type="button"
                className={post.liked ? 'liked' : ''}
                onClick={() => toggleLike(post.id)}
                id={`like-post-${post.id}`}
              >
                {post.liked ? '♥' : '♡'} {post.likes}
              </button>
              <button type="button" id={`comment-post-${post.id}`}>
                💬 {post.comments}
              </button>
              <button type="button" id={`share-post-${post.id}`}>
                ↗ Share
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Home
