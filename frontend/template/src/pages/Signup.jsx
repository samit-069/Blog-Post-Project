import { useState } from 'react'


function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!name || !email || !password || !confirmPassword) {
      setError('Fill in every field to continue.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords don\'t match.')
      return
    }

    setSubmitting(true)
    // Replace with your real signup call
    setTimeout(() => {
      setSubmitting(false)
    }, 900)
  }

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-mark">
          <div className="logo">P</div>
          <span>Pulse</span>
        </div>

        <h1>Create your account</h1>
        <p>Join Pulse to start posting and following.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="signup-field">
            <label htmlFor="signup-name">Name</label>
            <div className="signup-input-wrap">
              <input
                id="signup-name"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
          </div>

          <div className="signup-field">
            <label htmlFor="signup-email">Email</label>
            <div className="signup-input-wrap">
              <input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
          </div>

          <div className="signup-field">
            <label htmlFor="signup-password">Password</label>
            <div className="signup-input-wrap">
              <input
                id="signup-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="signup-toggle-visibility"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="signup-field">
            <label htmlFor="signup-confirm-password">Confirm password</label>
            <div className="signup-input-wrap">
              <input
                id="signup-confirm-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
          </div>

          {error && <p className="signup-error">{error}</p>}

          <button className="signup-submit" type="submit" disabled={submitting}>
            {submitting ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <p className="signup-footer">
          Already have an account?{' '}
          <button type="button" onClick={() => {/* route to /login */ }}>
            Log in
          </button>
        </p>
      </div>
    </div>
  )
}

export default Signup