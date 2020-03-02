const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // console.info('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',`mongodb://${process.env.MONGO_URI}`)
        const conn = await mongoose.connect(`mongodb://${process.env.MONGO_URI}`, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (err) {
        console.log(`Error: ${err.message}`.red)
        // process.exit(1)
    }
}

module.exports = connectDB
