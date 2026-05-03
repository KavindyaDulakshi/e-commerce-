import express from 'express'
import products from './products.js'
import orders from './orders.js'
import auth from './auth.js'

const router = express.Router()

router.use('/products', products)
router.use('/orders', orders)
router.use('/auth', auth)

export default router
