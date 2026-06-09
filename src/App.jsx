import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import GenerateContract from './components/GenerateContract'
import SavedContracts from './components/SavedContracts'
import Toast from './components/Toast'
import { getContracts, saveContract, deleteContract } from './utils/storage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

export default function App() {
  const [tab, setTab] = useState('generate')
  const [contracts, setContracts] = useState(() => getContracts('guest'))
  const [toast, setToast] = useState('')
  const [page, setPage] = useState('home')

  function refresh() {
    setContracts(getContracts('guest'))
  }

  const showToast = useCallback((msg) => setToast(msg), [])

  if (page === 'privacy') return <PrivacyPolicy onBack={() => setPage('home')} />
  if (page === 'terms')   return <TermsOfService onBack={() => setPage('home')} />
  if (page === 'about')   return <AboutPage onBack={() => setPage('home')} />
  if (page === 'contact') return <ContactPage onBack={() => setPage('home')} />

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Contract Assistant 📄</h2>
          <p>Generate professional contracts in seconds — completely free, no sign-up required.</p>
        </div>

        <div className="tabs">
          <button className={`tab-btn ${tab === 'generate' ? 'active' : ''}`} onClick={() => setTab('generate')}>
            ✨ Generate Contract
          </button>
          <button className={`tab-btn ${tab === 'saved' ? 'active' : ''}`} onClick={() => setTab('saved')}>
            💾 Saved ({contracts.length})
          </button>
        </div>

        {tab === 'generate' && <GenerateContract user={{ id: 'guest' }} onSaved={refresh} onToast={showToast} />}
        {tab === 'saved' && <SavedContracts contracts={contracts} onDeleted={refresh} onToast={showToast} />}
      </div>

      <Footer onNavigate={setPage} />
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </>
  )
}