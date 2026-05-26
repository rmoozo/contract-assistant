const KEY = 'ca_contracts'

export function getContracts(userId) {
  return JSON.parse(localStorage.getItem(KEY) || '[]').filter(c => c.userId === userId)
}

export function saveContract(userId, contract) {
  const all = JSON.parse(localStorage.getItem(KEY) || '[]')
  const item = { id: Date.now(), userId, createdAt: new Date().toLocaleDateString('en-US'), ...contract }
  localStorage.setItem(KEY, JSON.stringify([item, ...all]))
  return item
}

export function deleteContract(id) {
  const all = JSON.parse(localStorage.getItem(KEY) || '[]')
  localStorage.setItem(KEY, JSON.stringify(all.filter(c => c.id !== id)))
}
