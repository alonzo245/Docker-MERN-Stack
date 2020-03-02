const mongoose = require('mongoose')
const TransactionsSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        trim: true,
        required: [true, 'Please add number']
    },
    createdAt: {
        type: Date,
        trim: Date.now
    }
})

module.exports = mongoose.model('Transaction', TransactionsSchema)