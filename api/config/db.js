import mongoose from 'mongoose'

const connectDB = async () => {
  const mongoUri =
    process.env.NODE_ENV === 'production'
      ? process.env.MONGO_PROD_URI
      : process.env.MONGO_DEV_URI

  try {
    const con = await mongoose.connect(mongoUri)
    console.log(`MongoDB connection established : ${con.connection.host}\n`)
  } catch (error) {
    console.error(`Error: ${error.message}\n`)
    process.exit(1)
  }
}

export default connectDB
