export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Contract Assistant. All rights reserved.</p>
      <div className="footer-links">
        <span onClick={() => onNavigate('privacy')}>Privacy Policy</span>
        <span onClick={() => onNavigate('terms')}>Terms of Service</span>
        <a href="mailto:contact@contractassistant.com">Contact</a>
      </div>
    </footer>
  )
}