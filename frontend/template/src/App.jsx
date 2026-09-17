import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'


import Home from './pages/Home'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'
import NewPost from './pages/NewPost'
import Login from './pages/Login'
import Signup from './pages/Signup'

// Full layout: header + sidebar + footer (for Home)
function AppLayout() {
  return (
    <div className="app">
      <Header />
      <main className="main-layout">
        <Sidebar />
        <Outlet />
      </main>

    </div>
  )
}

// Header + sidebar, no footer, wide content area (for Profile / Settings)
function SidebarLayout() {
  return (
    <div className="app">
      <Header />
      <main className="layout-sidebar-only">
        <Sidebar />
        <div className="layout-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone pages — no header/sidebar/footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Full layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/new-post" element={<NewPost />} />
        </Route>

        {/* Sidebar only layout */}
        <Route element={<SidebarLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App