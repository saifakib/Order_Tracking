const router = require('express').Router()
const authController = require('../controllers/authControllers')

router.post('/signup', authController.signUpPostController)
router.post('/login', authController.loginPostController)

module.exports = router;