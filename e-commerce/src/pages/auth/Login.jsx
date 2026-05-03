import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'

const API_BASE = import.meta.env.VITE_API_BASE || ''

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const json = await res.json()
    setLoading(false)
    if (!res.ok) {
      setError(json?.error?.message || json?.error || 'Login failed')
      return
    }

    const session = json.session
    if (session?.access_token) {
      await supabase.auth.setSession({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      })
    }

    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <div className="text-sm text-red-400">{error}</div>}
        <button disabled={loading} className="rounded bg-amber-300 px-4 py-2 font-bold">
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
