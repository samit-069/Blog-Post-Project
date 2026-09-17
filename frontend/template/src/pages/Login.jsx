import { useState } from 'react'
import './login.css'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Enter your email and password to continue.')
      return
    }

    setSubmitting(true)
    // Replace with your real auth call
    setTimeout(() => {
      setSubmitting(false)
    }, 900)
  }

  return (
    <div className="login-page">
      <div className="login-card">


        <h1>Log in</h1>
        <p>Welcome back. Enter your details to continue.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="login-field">
            <label htmlFor="login-email">Email</label>
            <div className="login-input-wrap">
              <input
                id="login-email"
                type="email"
                placeholder="@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
          </div>

          <div className="login-field">
            <div className="login-field-row">
              <label htmlFor="login-password">Password</label>
              <button
                type="button"
                className="login-forgot"
                onClick={() => {/* route to your reset-password flow */ }}
              >
                Forgot password?
              </button>
            </div>
            <div className="login-input-wrap">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login-toggle-visibility"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button className="login-submit" type="submit" disabled={submitting}>
            {submitting ? 'Logging in…' : 'Log in'}
          </button>
        </form>

        <p className="login-footer">
          New here?{' '}
          <button type="button" onClick={() => {/* route to /signup */ }}>
            Create an account
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login