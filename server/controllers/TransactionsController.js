import { StatusCodes } from 'http-status-codes'
import Transaction from '../Models/Transaction.js'

const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.find()
    res.status(StatusCodes.OK).json(transaction)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export { getTransaction }
