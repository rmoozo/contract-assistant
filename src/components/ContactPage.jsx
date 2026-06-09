import { useState } from 'react'

export default function ContactPage({ onBack }) {
  const email = 'contract20000@gmail.com'
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <h1>Contact Us</h1>
        <p className="legal-updated">We typically respond within 1–2 business days.</p>

        <section>
          <h2>Get in Touch</h2>
          <p>Have a question or feedback? Send us an email and we'll get back to you shortly.</p>
          <div className="legal-contact" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem'}}>
            <span style={{fontSize:'1rem', fontWeight:'600', color:'#185FA5'}}>{email}</span>
            <button className="btn-icon" onClick={handleCopy}>
              {copied ? '✅ Copied!' : '📋 Copy'}
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}