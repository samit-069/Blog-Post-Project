import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <header className="top-header">
      <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <div className="logo">M</div>
        <span>Blog Post</span>
      </div>

      <div className="search-box">
        <span className="search-icon">⌕</span>
        <input type="text" placeholder="Search" />
      </div>

      <div className="auth-buttons">
        <button className="login-btn" onClick={() => navigate('/login')}>Log In</button>
        <button className="signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </header>
  )
}

export default Header
