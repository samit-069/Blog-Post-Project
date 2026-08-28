import { NavLink, useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()

  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/notifications" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="nav-icon">🔔</span>
          <span>Notifications</span>
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="nav-icon">👤</span>
          <span>Profile</span>
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="nav-icon">⚙</span>
          <span>Settings</span>
        </NavLink>
      </nav>

      <button className="new-post-btn" onClick={() => navigate('/new-post')}>New Post</button>
    </aside>
  )
}

export default Sidebar
