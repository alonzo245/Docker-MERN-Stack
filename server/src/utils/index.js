exports.verifyToken = (req, res, next) => {
    const bh = req.headers['authorization']
    if (typeof bh !== 'undefined') {
        const bearer = bh.split(' ')
        const token = bearer[1]
        req.token = token
        next()
    } else {
        res.sendStatus(403)
    }
}