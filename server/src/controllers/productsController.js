import { supabase } from '../config/supabase.js'

const DEFAULT_LIMIT = 24

export async function getProducts(req, res, next) {
  try {
    const limit = parseInt(req.query.limit, 10) || DEFAULT_LIMIT
    const offset = parseInt(req.query.offset, 10) || 0

    const { data, error } = await supabase
      .from('products')
      .select('id, name, price, image_url')
      .range(offset, offset + limit - 1)

    if (error) return next(error)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

export async function getProductById(req, res, next) {
  try {
    const { id } = req.params
    const { data, error } = await supabase.from('products').select('id, name, price, description, image_url').eq('id', id).maybeSingle()
    if (error) return next(error)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

export async function createProduct(req, res, next) {
  try {
    const payload = req.body
    const { data, error } = await supabase.from('products').insert(payload).select('id, name, price, image_url').single()
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
    const { data, error } = await supabase.from('products').update(payload).eq('id', id).select('id, name, price, image_url').maybeSingle()
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
