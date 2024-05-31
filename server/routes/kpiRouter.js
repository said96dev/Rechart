import express from 'express'
import { getKPIs } from '../controllers/KpiController.js'
const router = express.Router()

router.route('/kpis').get(getKPIs)

export default router
