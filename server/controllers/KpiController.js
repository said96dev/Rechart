import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../error/index.js'
import KPI from '../Models/KPI.js'

const getKPIs = async (req, res) => {
  try {
    const kpIs = await KPI.find()
    res.status(StatusCodes.OK).json(kpIs)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export { getKPIs }
