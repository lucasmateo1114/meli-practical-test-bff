import express from 'express'
import { getCurrenciesFromSite }  from './controller.js'

const router = express.Router()

router.get('/:siteId', getCurrenciesFromSite)

export default router