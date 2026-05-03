import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_BASE = import.meta.env.VITE_API_BASE || ''

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const res = await fetch(`${API_BASE}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const json = await res.json()
    setLoading(false)
    if (!res.ok) {
      setError(json?.error?.message || json?.error || 'Signup failed')
      return
    }

    // Redirect to login to sign in
    navigate('/login')
  }

  return (
    <div className="max-w-md mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Sign up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <div className="text-sm text-red-400">{error}</div>}
        <button disabled={loading} className="rounded bg-amber-300 px-4 py-2 font-bold">
          {loading ? 'Creating…' : 'Sign up'}
        </button>
      </form>
    </div>
  )
}
