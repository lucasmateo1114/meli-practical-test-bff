import express from 'express'
import { check }  from './controller.js'

const router = express.Router()

router.get('/', check)

export default router