const { StatusCodes } = require("http-status-codes")
const Order = require("../models/Order")



const createOrder = async(req, res)=>{

    req.body.user = req.user.userId

    const order = await Order.findOne({user:req.user.userId})

    if(order){
        await order.deleteOne()
    }
    const newOrder =  new Order(req.body)
    await newOrder.save()

    res.status(StatusCodes.CREATED).json({success:true})
}


const getOrder = async(req ,res)=>{
    const order = await Order.findOne({user:req.user.userId})

    if(!order){
        return res.status(StatusCodes.NOT_FOUND).json({success:false})
    }
    res.status(StatusCodes.OK).json(order)
}


module.exports = {
    createOrder, getOrder
}