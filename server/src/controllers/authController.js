import { supabase, isServiceRole } from '../config/supabase.js'

export async function signup(req, res, next) {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' })

    if (!isServiceRole) {
      return res.status(501).json({ error: 'Server-side signup requires SUPABASE_SERVICE_ROLE_KEY. Use client-side signup with Supabase or set SUPABASE_SERVICE_ROLE_KEY.' })
    }

    // Create user via Supabase Admin API (requires service role key)
    const { data, error } = await supabase.auth.admin.createUser({ email, password })
    if (error) return next(error)

    res.status(201).json({ user: data })
  } catch (err) {
    next(err)
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' })

    // Create a session (returns access and refresh tokens)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return next(error)

    res.json({ session: data.session, user: data.user })
  } catch (err) {
    next(err)
  }
}
