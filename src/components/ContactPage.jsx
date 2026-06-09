import { useState } from 'react'

export default function ContactPage({ onBack }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit() {
    if (!name || !email || !message) { alert('Please fill in all fields'); return }
    setSent(true)
  }

  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <h1>Contact Us</h1>
        <p className="legal-updated">We typically respond within 1–2 business days.</p>

        {sent ? (
          <div className="contact-success">
            <div className="success-icon">✅</div>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. We'll get back to you shortly.</p>
            <button className="btn-primary" style={{marginTop:'1rem', width:'auto', padding:'10px 24px'}} onClick={onBack}>
              Back to Home
            </button>
          </div>
        ) : (
          <section>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="field-textarea"
                style={{minHeight:'150px'}}
                placeholder="How can we help you?"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <button className="btn-primary" onClick={handleSubmit}>
              Send Message
            </button>
          </section>
        )}
      </div>
    </div>
  )
}