import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import NewPost from './pages/NewPost'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* Header */}
        <Header />

        {/* Main Layout */}
        <main className="main-layout">

          {/* Left Sidebar */}
          <Sidebar />

          {/* Page Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App