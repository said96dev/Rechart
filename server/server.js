import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

//DB
import connectDB from './db/connect.js'

//Routes
import KpiRouter from './routes/kpiRouter.js'
import ProductRouter from './routes/ProductRouter.js'
import TransactionRouter from './routes/TransactionRouter.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

/* Configuration */

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(
  helmet.crossOriginOpenerPolicy({
    policy: 'same-origin', // Ensure the policy is valid
  })
)
app.use(morgan('common'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/kpi', KpiRouter)
app.use('/product', ProductRouter)
app.use('/transaction', TransactionRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

/* Database Connection */
const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`)
    })

    //await mongoose.connection.db.dropDatabase()
    //await Product.insertMany(products)
    //await KPI.insertMany(kpis)
    //Transaction.insertMany(transactions)
  } catch (error) {
    console.log(error)
  }
}

start()
