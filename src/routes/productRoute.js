const router = require('express').Router()
const Product = require('../controllers/productsController')
const { auth } = require('../middlewares')

router.get('/products', auth, Product.getSellerProduct)
router.get('/product/:id', auth, Product.getSigleProduct)

module.exports = router;