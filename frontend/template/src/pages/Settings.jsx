import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import './settings.css'

function Settings() {
  const { theme, toggleTheme } = useTheme()

  const [username, setUsername] = useState('janedoe')
  const [savingProfile, setSavingProfile] = useState(false)

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [savingPassword, setSavingPassword] = useState(false)

  const handleUsernameSave = (e) => {
    e.preventDefault()
    setSavingProfile(true)
    // Replace with your real API call
    setTimeout(() => setSavingProfile(false), 800)
  }

  const handlePasswordSave = (e) => {
    e.preventDefault()
    setPasswordError('')

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError('Fill in all password fields.')
      return
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords don\'t match.')
      return
    }

    setSavingPassword(true)
    // Replace with your real API call
    setTimeout(() => {
      setSavingPassword(false)
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    }, 800)
  }

  return (
    <section className="settings-page">
      <h1>Settings</h1>

      <div className="settings-card">
        <div className="settings-row">
          <div>
            <strong>Dark mode</strong>
            <p>Switch between light and dark appearance.</p>
          </div>
          <button
            type="button"
            className={'settings-toggle' + (theme === 'dark' ? ' on' : '')}
            onClick={toggleTheme}
          >
            <span />
          </button>
        </div>
      </div>

      <div className="settings-card">
        <h2>Account</h2>
        <form onSubmit={handleUsernameSave}>
          <div className="settings-field">
            <label htmlFor="settings-username">Username</label>
            <input
              id="settings-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button className="settings-save" type="submit" disabled={savingProfile}>
            {savingProfile ? 'Saving…' : 'Save username'}
          </button>
        </form>
      </div>

      <div className="settings-card">
        <h2>Change password</h2>
        <form onSubmit={handlePasswordSave}>
          <div className="settings-field">
            <label htmlFor="settings-current-password">Current password</label>
            <input
              id="settings-current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <div className="settings-field">
            <label htmlFor="settings-new-password">New password</label>
            <input
              id="settings-new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <div className="settings-field">
            <label htmlFor="settings-confirm-password">Confirm new password</label>
            <input
              id="settings-confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          {passwordError && <p className="settings-error">{passwordError}</p>}

          <button className="settings-save" type="submit" disabled={savingPassword}>
            {savingPassword ? 'Updating…' : 'Update password'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Settings