import { useState, useEffect, useCallback } from 'react'
import AuthScreen from './components/AuthScreen'
import Navbar from './components/Navbar'
import GenerateContract from './components/GenerateContract'
import SavedContracts from './components/SavedContracts'
import Toast from './components/Toast'
import { getSession, setSession, clearSession } from './utils/auth'
import { getContracts } from './utils/storage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

export default function App() {
  const [user, setUser] = useState(null)
  const [tab, setTab] = useState('generate')
  const [contracts, setContracts] = useState([])
  const [toast, setToast] = useState('')
  const [page, setPage] = useState('home') // أضفه مع باقي الـ states

  useEffect(() => {
    const s = getSession()
    if (s) { setUser(s); setContracts(getContracts(s.id)) }
  }, [])

  function handleLogin(u) {
    setUser(u); setSession(u); setContracts(getContracts(u.id))
  }

  function handleLogout() {
    clearSession(); setUser(null); setContracts([])
  }

  function refresh() {
    setContracts(getContracts(user.id))
  }

  const showToast = useCallback((msg) => setToast(msg), [])

if (!user) return <AuthScreen onLogin={handleLogin} />

  if (page === 'privacy') return <PrivacyPolicy onBack={() => setPage('home')} />
  if (page === 'terms')   return <TermsOfService onBack={() => setPage('home')} />
 if (page === 'about')   return <AboutPage   onBack={() => setPage('home')} />
  if (page === 'contact') return <ContactPage onBack={() => setPage('home')} />
  
  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Welcome back, {user.name.split(' ')[0]} 👋</h2>
          <p>Generate professional contracts in seconds — completely free, no internet required.</p>
        </div>

        <div className="tabs">
          <button className={`tab-btn ${tab === 'generate' ? 'active' : ''}`} onClick={() => setTab('generate')}>
            ✨ Generate Contract
          </button>
          <button className={`tab-btn ${tab === 'saved' ? 'active' : ''}`} onClick={() => setTab('saved')}>
            💾 Saved ({contracts.length})
          </button>
        </div>

        {tab === 'generate' && <GenerateContract user={user} onSaved={refresh} onToast={showToast} />}
        {tab === 'saved' && <SavedContracts contracts={contracts} onDeleted={refresh} onToast={showToast} />}
      </div>

      <Footer onNavigate={setPage} />
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </>
  )
}