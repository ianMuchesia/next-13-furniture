const express = require('express')
const {createCart, getCart }= require('../controllers/cartController')
const { authenticateUser } = require('../middleware/authentication')

const router = express.Router()


router.post('/',authenticateUser, createCart)
router.get('/',authenticateUser, getCart )


module.exports = router