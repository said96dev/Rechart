import express from 'express'
import { getTransaction } from '../controllers/TransactionsController.js'
const router = express.Router()

router.route('/transactions').get(getTransaction)

export default router
