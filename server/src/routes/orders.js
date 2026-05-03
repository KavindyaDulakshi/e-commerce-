import express from 'express'
import { createOrder, getOrders } from '../controllers/ordersController.js'
import { requireAuth } from '../middlewares/auth.js'

const router = express.Router()

// Require authentication for order endpoints
router.get('/', requireAuth, getOrders)
router.post('/', requireAuth, createOrder)

export default router
