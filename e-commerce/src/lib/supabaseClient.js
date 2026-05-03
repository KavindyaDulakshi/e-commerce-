import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const createNoopAuth = () => ({
  async getSession() {
    return { data: { session: null }, error: null }
  },
  async setSession() {
    return { data: { session: null }, error: null }
  },
  async signInWithPassword() {
    return { data: { session: null, user: null }, error: new Error('Supabase environment variables are missing') }
  },
  async signOut() {
    return { error: null }
  },
  onAuthStateChange(callback) {
    callback('INITIAL_SESSION', null)
    return { data: { subscription: { unsubscribe() {} } } }
  },
})

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in environment; using no-op auth client')
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : { auth: createNoopAuth() }
