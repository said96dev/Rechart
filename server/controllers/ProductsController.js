import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../error/index.js'
import Product from '../Models/Product.js'

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(StatusCodes.OK).json(products)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export { getProducts }
