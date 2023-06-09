const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const Cart = require("../models/Cart");

const createCart = async (req, res) => {
  const { userId } = req.userId;
  const {subtotal, CartItems} = req.body

  const cart = await Cart.findOne({ user: userId });

  if (cart) {
    await cart.deleteOne()
  }
  
  const newCart = await Cart.create({
    user: userId,
    subtotal,
    CartItems
  })


  return res.status(StatusCodes.CREATED).json({success:true})
};

const getCart = async(req , res)=>{
    const {userId} = req.user;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(StatusCodes.NOT_FOUND).json({success:false})
    }
    return res.status(StatusCodes.OK).json({success:true, cart})
}


module.exports = {createCart, getCart}

