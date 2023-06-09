const express = require('express')
const {createCart, getCart }= require('../controllers/cartController')

const router = express.Router()


router.post('/', createCart)
router.get('/', getCart )


module.exports = router