export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to Contract Assistant We are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information when you use our services.</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Account Information:</strong> Name and email address when you register.</li>
            <li><strong>Contract Data:</strong> Stored locally on your device only — never sent to our servers.</li>
            <li><strong>Usage Data:</strong> Pages visited and features used.</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies</h2>
          <p>We use cookies for essential functionality, analytics, and advertising. You can control cookies through your browser settings.</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Keep you logged in.</li>
            <li><strong>Analytics Cookies:</strong> Understand how visitors use the site.</li>
            <li><strong>Advertising Cookies:</strong> Serve relevant ads via Google AdSense.</li>
          </ul>
        </section>

        <section>
          <h2>4. Google AdSense & Third-Party Advertising</h2>
          <p>We use Google AdSense to display ads. Google uses cookies to serve ads based on your visits to this and other websites.</p>
          <ul>
            <li>You may opt out of personalised ads at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
            <li>You may also opt out via the <a href="https://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a>.</li>
            <li>Learn how Google uses data: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google Partner Sites Policy</a>.</li>
          </ul>
        </section>

        <section>
          <h2>5. How We Use Your Information</h2>
          <ul>
            <li>Provide and improve our services.</li>
            <li>Personalise your experience.</li>
            <li>Display advertisements through Google AdSense.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2>6. Data Storage & Security</h2>
          <p>Your contract data is stored in your browser's local storage and never transmitted to our servers. We implement appropriate technical safeguards, but cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2>7. Sharing of Information</h2>
          <p>We do not sell or rent your personal data. We may share data with service providers (e.g., Google AdSense) or when required by law.</p>
        </section>

        <section>
          <h2>8. Your Rights</h2>
          <ul>
            <li>Access, correct, or delete your personal data.</li>
            <li>Opt out of personalised advertising.</li>
            <li>Data portability.</li>
          </ul>
        </section>

        <section>
          <h2>9. Children's Privacy</h2>
          <p>Our services are not directed to children under 13. We do not knowingly collect data from children.</p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>We may update this policy periodically. The updated date will reflect any changes.</p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <div className="legal-contact">
            <p><strong>Contract Assistant</strong></p>
            <p>Email: <a href="contract20000@gmail.com">contract20000@gmail.com</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}