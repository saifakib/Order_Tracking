const router = require('express').Router()
const sellerController = require('../controllers/sellerProductController')
const { auth } = require('../middlewares')

router.get('/order-product', auth, sellerController.getAllOrderProduct)
router.post('/create-product', auth, sellerController.postSellerProduct)
router.put('/pickup/:id', auth, sellerController.pickupProduct)
router.put('/deliver/:id', auth, sellerController.deliverProduct)

module.exports = router;