import { supabase } from '../config/supabase.js'

export async function getOrders(req, res, next) {
  try {
    const userId = req.user?.id
    if (!userId) return res.status(401).json({ error: 'Unauthorized' })

    const { data, error } = await supabase
      .from('orders')
      .select('id, user_id, total_price, status, created_at, order_items(id, product_id, quantity, unit_price)')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) return next(error)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

export async function createOrder(req, res, next) {
  try {
    const userId = req.user?.id
    const { items, total_price } = req.body

    if (!userId) return res.status(401).json({ error: 'Unauthorized' })
    if (!Array.isArray(items) || items.length === 0 || typeof total_price !== 'number') {
      return res.status(400).json({ error: 'Invalid order payload. Require items array and total_price (number).' })
    }

    // Basic validation on items
    for (const it of items) {
      if (!it.product_id || typeof it.quantity !== 'number' || it.quantity < 1) {
        return res.status(400).json({ error: 'Each item must have product_id and quantity >= 1' })
      }
    }

    // Insert order
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({ user_id: userId, total_price })
      .select('id, user_id, total_price, status, created_at')
      .single()

    if (orderError) return next(orderError)

    const order_id = orderData.id

    // Prepare order items payload
    const itemsToInsert = items.map((it) => ({
      order_id,
      product_id: it.product_id,
      quantity: it.quantity,
      unit_price: it.unit_price ?? it.price ?? 0
    }))

    const { data: itemsData, error: itemsError } = await supabase.from('order_items').insert(itemsToInsert).select('id, order_id, product_id, quantity, unit_price')

    if (itemsError) {
      // Attempt cleanup if items insert fails
      await supabase.from('orders').delete().eq('id', order_id)
      return next(itemsError)
    }

    res.status(201).json({ order: orderData, items: itemsData })
  } catch (err) {
    next(err)
  }
}
