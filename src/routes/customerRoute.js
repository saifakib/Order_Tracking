const router = require('express').Router()
const customerController = require('../controllers/customerController')
const { auth } = require('../middlewares')

router.get('/product/order', auth, customerController.getAllOrderProduct)
router.put('/product/order/:id', auth, customerController.postOrderProduct)

module.exports = router;

