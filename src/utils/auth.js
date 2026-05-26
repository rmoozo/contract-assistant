export function getUsers() {
  return JSON.parse(localStorage.getItem('ca_users') || '[]')
}

export function getSession() {
  const s = localStorage.getItem('ca_session')
  return s ? JSON.parse(s) : null
}

export function setSession(user) {
  localStorage.setItem('ca_session', JSON.stringify(user))
}

export function clearSession() {
  localStorage.removeItem('ca_session')
}

export function register(name, email, password) {
  const users = getUsers()
  if (users.find(u => u.email === email)) throw new Error('Email already in use')
  const user = { id: Date.now(), name, email, password }
  localStorage.setItem('ca_users', JSON.stringify([...users, user]))
  return user
}

export function login(email, password) {
  const user = getUsers().find(u => u.email === email && u.password === password)
  if (!user) throw new Error('Invalid email or password')
  return user
}

export function getInitials(name = '') {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}
