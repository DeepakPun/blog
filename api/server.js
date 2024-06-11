import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import postRoutes from './routes/postRoutes.js'
const app = express()
const PORT = process.env.PORT || 3001

// Connect to database
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// import and mount routes
app.use('/api/posts', postRoutes)

app.get('/', (req, res) => {
  res.send(`API Server is running`)
})

app.listen(PORT, () => {
  console.log(`\nAPI Server is listening on port ${PORT}\n`)
})
