export default function AboutPage({ onBack }) {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <h1>About Contract Assistant</h1>

        <section>
          <h2>What We Do</h2>
          <p>
            Contract Assistant is a free, easy-to-use tool that helps individuals and small
            businesses generate professional contract documents in seconds. No legal background
            required — simply choose a template, fill in your details, and download your contract.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            We believe that access to professional contracts should be simple and free.
            Whether you're hiring your first employee, renting a property, or starting a
            freelance project, Contract Assistant gives you the tools to protect yourself
            and your business.
          </p>
        </section>

        <section>
          <h2>What We Offer</h2>
          <ul>
            <li>✅ 6 professional contract templates</li>
            <li>✅ Instant PDF export</li>
            <li>✅ Save and manage your contracts</li>
            <li>✅ 100% free — no subscriptions, no hidden fees</li>
            <li>✅ Your data stays on your device</li>
          </ul>
        </section>

        <section>
          <h2>Important Notice</h2>
          <div className="legal-notice">
            <p>
              <strong>⚠ Disclaimer:</strong> Contract Assistant provides templates for general
              informational purposes only. We do not provide legal advice. Always consult a
              qualified attorney before signing any legally binding contract.
            </p>
          </div>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you.</p>
          <div className="legal-contact">
            <p>Email: <a href="contract20000@gmail.com">contract20000@gmail.com</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}