import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import routes from './routes/index.js'
import { errorHandler } from './middlewares/errorHandler.js'

dotenv.config()
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api', routes)

app.use(errorHandler)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
