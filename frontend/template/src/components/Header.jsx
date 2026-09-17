import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Header() {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="top-header">
      <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <div className="logo">B</div>
        <span>Blog Post</span>
      </div>

      <div className="search-box">
        <span className="search-icon">⌕</span>
        <input type="text" placeholder="Search posts…" id="header-search" />
      </div>

      <div className="auth-buttons">



        <button className="login-btn" id="header-login-btn" onClick={() => navigate('/login')}>Log In</button>
        <button className="signup-btn" id="header-signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </header>
  )
}

export default Header
