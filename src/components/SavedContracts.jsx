import { useState } from 'react'
import { deleteContract } from '../utils/storage'
import { exportToPDF } from '../utils/pdf'

export default function SavedContracts({ contracts, onDeleted, onToast }) {
  const [viewing, setViewing] = useState(null)

  function handleDelete(id) {
    if (!confirm('Delete this contract?')) return
    deleteContract(id)
    onDeleted()
    onToast('Deleted!')
  }

  if (contracts.length === 0) {
    return (
      <div className="work-area">
        <div className="empty-state">
          <div className="empty-icon">📂</div>
          <p>No saved contracts yet.<br />Generate a contract and save it here.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="work-area">
      <h3>💾 Saved Contracts ({contracts.length})</h3>
      <div className="saved-list">
        {contracts.map(c => (
          <div className="saved-card" key={c.id}>
            <div className="saved-card-header">
              <span className="saved-card-title">{c.title}</span>
              <span className="badge badge-blue">{c.contractType}</span>
            </div>
            <div className="saved-card-meta">📅 {c.createdAt}</div>
            <div className="saved-preview">{c.content}</div>
            <div className="saved-actions">
              <button className="btn-icon" onClick={() => setViewing(c)}>👁 View</button>
              <button className="btn-icon" onClick={() => { navigator.clipboard.writeText(c.content); onToast('Copied!') }}>📋 Copy</button>
              <button className="btn-icon" onClick={() => exportToPDF(c.title, c.content)}>📥 PDF</button>
              <button className="btn-danger" onClick={() => handleDelete(c.id)}>🗑 Delete</button>
            </div>
          </div>
        ))}
      </div>

      {viewing && (
        <div className="modal-backdrop" onClick={() => setViewing(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{viewing.title}</h3>
              <button className="modal-close" onClick={() => setViewing(null)}>✕</button>
            </div>
            <div className="modal-body">{viewing.content}</div>
          </div>
        </div>
      )}
    </div>
  )
}
