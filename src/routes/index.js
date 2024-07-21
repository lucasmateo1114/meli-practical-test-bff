import express from 'express'
const router = express.Router()

import health from './../api/health/routes.js'
import item from './../api/item/routes.js'
import currency from './../api/currency/routes.js'

router.use('/health', health)
router.use('/items', item)
router.use('/currency', currency)

export default router 