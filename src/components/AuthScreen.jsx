import { useState } from 'react'
import { login, register } from '../utils/auth'

export default function AuthScreen({ onLogin }) {
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit() {
    setError('')
    if (!email || !password) { setError('Please fill in all fields'); return }
    if (mode === 'register' && !name) { setError('Please enter your name'); return }
    setLoading(true)
    try {
      const user = mode === 'register' ? register(name, email, password) : login(email, password)
      onLogin(user)
    } catch (e) { setError(e.message) }
    setLoading(false)
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-logo">
          <span className="icon">📄</span>
          <h1>Contract Assistant</h1>
          <p>Professional contracts — no AI required</p>
        </div>
        {mode === 'register' && (
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} />
          </div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
        </div>
        {error && <div className="error-msg">⚠ {error}</div>}
        <button className="btn-primary" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
        </button>
        <div className="switch-text">
          {mode === 'login'
            ? <>No account? <span onClick={() => { setMode('register'); setError('') }}>Sign Up</span></>
            : <>Have an account? <span onClick={() => { setMode('login'); setError('') }}>Sign In</span></>}
        </div>
      </div>
    </div>
  )
}
