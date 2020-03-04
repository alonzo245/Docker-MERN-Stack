const Transaction = require('../models/Transaction')
const jwt = require('jsonwebtoken')

// @desc Try user login 
// @route GET /api/v1/auth/login
// @access Public
exports.login = async (req, res, next) => {
    // mock user
    const user = {
        id: 1,
        username: 'alonzo',
        email: 'some@email.com'
    }

    jwt.sign({ user }, `${process.env.API_SECRET_TOKEN}`, {expiresIn: 3600 * 24 }, (err, token) => {
        if(err) console.log(err)
        res.json({
            token
        })
    })
}