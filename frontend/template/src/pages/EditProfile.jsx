import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './EditProfile.css'

function EditProfile() {
  const navigate = useNavigate()

  const [name, setName] = useState('Jane Doe')
  const [handle, setHandle] = useState('janedoe')
  const [bio, setBio] = useState('Building things on the internet. Sharing what I learn along the way.')
  const [location, setLocation] = useState('Kathmandu')
  const [saving, setSaving] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      navigate('/profile')
    }, 700)
  }

  return (
    <section className="edit-profile-page">
      <div className="edit-profile-topbar">
        <button
          type="button"
          className="edit-profile-back-btn"
          id="edit-profile-back"
          onClick={() => navigate('/profile')}
        >
          ← Back
        </button>
        <h1>Edit profile</h1>
      </div>

      <form className="edit-profile-form" onSubmit={handleSubmit} id="edit-profile-form">
        <div className="edit-profile-avatar-row">
          <div className="profile-avatar-lg avatar-blue">JD</div>
          <button type="button" className="edit-profile-avatar-btn" id="edit-profile-change-photo">
            Change photo
          </button>
        </div>

        <div className="edit-profile-field">
          <label htmlFor="edit-name">Name</label>
          <input
            id="edit-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="edit-profile-field">
          <label htmlFor="edit-handle">Username</label>
          <input
            id="edit-handle"
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="username"
          />
        </div>

        <div className="edit-profile-field">
          <label htmlFor="edit-bio">Bio</label>
          <textarea
            id="edit-bio"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell people about yourself"
          />
        </div>

        <div className="edit-profile-field">
          <label htmlFor="edit-location">Location</label>
          <input
            id="edit-location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, Country"
          />
        </div>

        <div className="edit-profile-actions">
          <button
            type="button"
            className="edit-profile-cancel-btn"
            id="edit-profile-cancel"
            onClick={() => navigate('/profile')}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="edit-profile-save-btn"
            id="edit-profile-save"
            disabled={saving}
          >
            {saving ? 'Saving…' : 'Save changes'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default EditProfile
