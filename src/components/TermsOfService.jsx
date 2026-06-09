export default function TermsOfService({ onBack }) {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By using Contract Assistant, you agree to these Terms. If you disagree, please do not use our service.</p>
        </section>

        <section>
          <h2>2. Not Legal Advice</h2>
          <div className="legal-notice">
            <p><strong>⚠ Disclaimer:</strong> Contract Assistant does not provide legal advice. Templates are for general use only. Consult a qualified attorney before using any contract for legally binding purposes.</p>
          </div>
        </section>

        <section>
          <h2>3. User Accounts</h2>
          <ul>
            <li>You are responsible for maintaining the confidentiality of your credentials.</li>
            <li>You must provide accurate registration information.</li>
            <li>Notify us immediately of any unauthorised account use.</li>
          </ul>
        </section>

        <section>
          <h2>4. Acceptable Use</h2>
          <p>You must not use the service to:</p>
          <ul>
            <li>Create contracts intended to deceive or defraud others.</li>
            <li>Violate any applicable law or regulation.</li>
            <li>Resell our templates commercially without permission.</li>
            <li>Use automated tools to scrape the service.</li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>Our templates and design are our intellectual property. Contracts you personalise and generate are yours to use freely.</p>
        </section>

        <section>
          <h2>6. Advertising</h2>
          <p>The service displays ads via Google AdSense to keep it free. We are not responsible for third-party ad content.</p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>Contract Assistant is not liable for any damages resulting from use of our templates. Use is entirely at your own risk.</p>
        </section>

        <section>
          <h2>8. Termination</h2>
          <p>We may suspend or terminate access for violations of these Terms without prior notice.</p>
        </section>

        <section>
          <h2>9. Changes to Terms</h2>
          <p>We may update these Terms at any time. Continued use constitutes acceptance of the revised Terms.</p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <div className="legal-contact">
            <p><strong>Contract Assistant</strong></p>
            <p>Email: <a href="contract20000@gmail.com">contract20000@gmail.com</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}