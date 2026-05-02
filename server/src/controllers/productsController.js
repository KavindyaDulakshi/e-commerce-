import { supabase } from '../config/supabase.js'

export async function getProducts(req, res, next) {
  try {
    const { data, error } = await supabase.from('products').select('*')
    if (error) return next(error)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

export async function getProductById(req, res, next) {
  try {
    const { id } = req.params
    const { data, error } = await supabase.from('products').select('*').eq('id', id).maybeSingle()
    if (error) return next(error)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

export async function createProduct(req, res, next) {
  try {
    const payload = req.body
    const { data, error } = await supabase.from('products').insert(payload).select().single()
    if (error) return next(error)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

export async function updateProduct(req, res, next) {
  try {
    const { id } = req.params
    const payload = req.body
    const { data, error } = await supabase.from('products').update(payload).eq('id', id).select().maybeSingle()
    if (error) return next(error)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

export async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params
    const { error } = await supabase.from('products').delete().eq('id', id)
    if (error) return next(error)
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}
