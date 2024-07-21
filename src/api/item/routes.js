import express from 'express'
import { searchItemsByTerm, getItemById }  from './controller.js'

const router = express.Router()

router.get('/', searchItemsByTerm)
router.get('/:id', getItemById)

export default router