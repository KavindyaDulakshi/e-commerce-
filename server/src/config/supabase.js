import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.SUPABASE_URL
// Prefer explicit service role env var, fall back to SUPABASE_KEY or anon key if provided
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY

if (!url || !key) {
  throw new Error('Missing SUPABASE_URL or SUPABASE key in environment. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (recommended) or SUPABASE_KEY.')
}

export const isServiceRole = !!process.env.SUPABASE_SERVICE_ROLE_KEY
export const supabase = createClient(url, key)
