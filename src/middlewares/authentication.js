const jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {
    try {
        const token = req.headers.authentication.split(' ')[1]
        const decode = jwt.verify(token, 'secret')

        req.user = decode;
        next()
    } catch (err) {
        res.json({
            message: 'Authentication Failed',
            err
        })
    }
}

module.exports = authentication;