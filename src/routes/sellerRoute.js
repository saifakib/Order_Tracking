const router = require('express').Router()
const sellerProduct = require('../controllers/sellerProductController')

router.get('/products', sellerProduct.getSellerProduct)
router.post('/create-product', sellerProduct.postSellerProduct)
router.put('/pickup/:id')
router.put('/deliver/:id')

module.exports = router;