import { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const mockNotifications = [
  { id: 1, text: 'Alex Smith liked your post.', time: '10m ago', unread: true },

]

function Sidebar() {
  const navigate = useNavigate()
  const [notifOpen, setNotifOpen] = useState(false)
  const [notifications] = useState(mockNotifications)
  const notifRef = useRef(null)

  const unreadCount = notifications.filter((n) => n.unread).length

  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/profile" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="nav-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          <span>Profile</span>
        </NavLink>

        <div className="notif-wrap" ref={notifRef}>
          <button
            className={'nav-item notif-trigger' + (notifOpen ? ' active' : '')}
            onClick={() => setNotifOpen((v) => !v)}
            type="button"
          >
            <span className="nav-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              {unreadCount > 0 && <span className="notif-badge" />}
            </span>
            <span>Notifications</span>
          </button>

          {notifOpen && (
            <div className="notif-dropdown">
              <div className="notif-dropdown-header">Notifications</div>
              {notifications.length === 0 ? (
                <p className="notif-dropdown-empty">You're all caught up.</p>
              ) : (
                notifications.map((n) => (
                  <div className={'notif-dropdown-item' + (n.unread ? ' unread' : '')} key={n.id}>
                    <div className="avatar avatar-purple">•</div>
                    <div className="notif-dropdown-text">
                      <p>{n.text}</p>
                      <span>{n.time}</span>
                    </div>
                    {n.unread && <span className="notif-dot" />}
                  </div>
                ))
              )}
            </div>
          )}
        </div>

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