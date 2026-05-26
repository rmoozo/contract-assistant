import { getInitials } from '../utils/auth'

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">📄 Contract Assistant</div>
      <div className="navbar-right">
        <div className="user-chip">
          <div className="user-avatar">{getInitials(user.name)}</div>
          <span className="user-name">{user.name}</span>
        </div>
        <button className="btn-logout" onClick={onLogout}>Sign Out</button>
      </div>
    </nav>
  )
}
