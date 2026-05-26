import { useState } from 'react'
import { CONTRACT_TEMPLATES } from '../templates/contracts'
import { saveContract } from '../utils/storage'
import { exportToPDF } from '../utils/pdf'

export default function GenerateContract({ user, onSaved, onToast }) {
  const [selectedId, setSelectedId] = useState(CONTRACT_TEMPLATES[0].id)
  const [fields, setFields] = useState({})
  const [result, setResult] = useState('')

  const template = CONTRACT_TEMPLATES.find(t => t.id === selectedId)

  function handleSelect(id) {
    setSelectedId(id)
    setFields({})
    setResult('')
  }

  function handleField(key, value) {
    setFields(prev => ({ ...prev, [key]: value }))
  }

  function handleGenerate() {
    const contract = template.generate(fields)
    setResult(contract)
  }

  function handleSave() {
    if (!result) return
    saveContract(user.id, {
      title: `${template.name} — ${new Date().toLocaleDateString('en-US')}`,
      contractType: template.name,
      content: result,
    })
    onSaved()
    onToast('Contract saved!')
  }

  function handleCopy() {
    navigator.clipboard.writeText(result)
    onToast('Copied!')
  }

  function handlePDF() {
    exportToPDF(template.name, result)
  }

  return (
    <div className="work-area">
      <h3>📋 Choose a Contract Template</h3>

      <div className="template-grid">
        {CONTRACT_TEMPLATES.map(t => (
          <div
            key={t.id}
            className={`template-card ${selectedId === t.id ? 'selected' : ''}`}
            onClick={() => handleSelect(t.id)}
          >
            <span className="template-icon">{t.icon}</span>
            <span className="template-name">{t.name}</span>
          </div>
        ))}
      </div>

      <hr className="section-divider" />
      <h3>✏️ Fill in the Details</h3>

      {template.fields.map((field, i) => {
        const isTextarea = field.type === 'textarea'
        const isSecond = i % 2 === 1 && !isTextarea && template.fields[i - 1]?.type !== 'textarea'

        if (isTextarea) {
          return (
            <div className="field-full" key={field.key}>
              <label className="field-label">{field.label}</label>
              <textarea
                className="field-textarea"
                placeholder={field.placeholder}
                value={fields[field.key] || ''}
                onChange={e => handleField(field.key, e.target.value)}
              />
            </div>
          )
        }

        if (isSecond) return null

        const nextField = template.fields[i + 1]
        const showPair = nextField && nextField.type !== 'textarea'

        if (showPair) {
          return (
            <div className="field-row" key={field.key}>
              <div>
                <label className="field-label">{field.label}</label>
                <input
                  className="field-input"
                  type={field.type || 'text'}
                  placeholder={field.placeholder}
                  value={fields[field.key] || ''}
                  onChange={e => handleField(field.key, e.target.value)}
                />
              </div>
              <div>
                <label className="field-label">{nextField.label}</label>
                <input
                  className="field-input"
                  type={nextField.type || 'text'}
                  placeholder={nextField.placeholder}
                  value={fields[nextField.key] || ''}
                  onChange={e => handleField(nextField.key, e.target.value)}
                />
              </div>
            </div>
          )
        }

        return (
          <div className="field-full" key={field.key}>
            <label className="field-label">{field.label}</label>
            <input
              className="field-input"
              type={field.type || 'text'}
              placeholder={field.placeholder}
              value={fields[field.key] || ''}
              onChange={e => handleField(field.key, e.target.value)}
            />
          </div>
        )
      })}

      <button className="btn-generate" onClick={handleGenerate}>
        ✨ Generate Contract
      </button>

      {result && (
        <div className="result-box">
          <div className="result-header">
            <h4>{template.name}</h4>
            <div className="result-actions">
              <button className="btn-icon" onClick={handleCopy}>📋 Copy</button>
              <button className="btn-icon" onClick={handlePDF}>📥 PDF</button>
              <button className="btn-icon" onClick={handleSave}>💾 Save</button>
            </div>
          </div>
          <div className="result-text">{result}</div>
        </div>
      )}
    </div>
  )
}
