const express = require('express')
const { createOrder, getOrder } = require('../controllers/orderController')
const { authenticateUser } = require('../middleware/authentication')

const router = express.Router()

router.post('/',authenticateUser, createOrder)
router.get('/',authenticateUser, getOrder)

module.exports = router