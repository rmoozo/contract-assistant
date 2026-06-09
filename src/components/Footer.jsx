export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Contract Assistant. All rights reserved.</p>
      <div className="footer-links">
        <span onClick={() => onNavigate('about')}>About</span>
        <span onClick={() => onNavigate('privacy')}>Privacy Policy</span>
        <span onClick={() => onNavigate('terms')}>Terms of Service</span>
        <span onClick={() => onNavigate('contact')}>Contact</span>
      </div>
    </footer>
  )
}