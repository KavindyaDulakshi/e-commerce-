import { supabase } from '../config/supabase.js'

export async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Missing or invalid Authorization header' })
    }

    const token = authHeader.split(' ')[1]

    // Verify token with Supabase
    const { data, error } = await supabase.auth.getUser(token)
    if (error || !data?.user) return res.status(401).json({ error: 'Invalid or expired token' })

    req.user = data.user
    next()
  } catch (err) {
    next(err)
  }
}
