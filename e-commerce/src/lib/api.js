import { supabase } from './supabaseClient'

const API_BASE = import.meta.env.VITE_API_BASE || ''

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/api/products`)
  if (!res.ok) throw new Error('Failed to fetch products')
  const json = await res.json()
  return json.data || []
}

export async function placeOrder({ user_id, items, total_price }) {
  const session = (await supabase.auth.getSession()).data.session
  const token = session?.access_token

  const res = await fetch(`${API_BASE}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ user_id, items, total_price }),
  })

  const json = await res.json()
  if (!res.ok) throw new Error(json?.error?.message || 'Order placement failed')
  return json
}
