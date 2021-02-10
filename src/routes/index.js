const authRoute = require('../routes/authRoute')
const sellerRoute = require('../routes/sellerRoute')
const customerRoute = require('../routes/customerRoute')

const routes = [
    {
        path: '/api/auth',
        handler: authRoute
    },
    {
        path: '/api/seller',
        handler: sellerRoute
    },
    {
        path: '/api/customer',
        handler: customerRoute
    }
]

module.exports = server => {
    routes.forEach(r => {
        server.use(r.path, r.handler)
    })
}