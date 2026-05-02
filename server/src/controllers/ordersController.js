import { supabase } from '../config/supabase.js'

export async function getOrders(req, res, next) {
  try {
    const { data, error } = await supabase.from('orders').select('*')
    if (error) return next(error)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

export async function createOrder(req, res, next) {
  try {
    const payload = req.body
    const { data, error } = await supabase.from('orders').insert(payload).select().single()
    if (error) return next(error)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}
