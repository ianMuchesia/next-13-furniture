const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const User = require('../models/User');
const { attachCookiesToResponse, createToken } = require("../utils");


const register = async(req, res)=>{
    const {name , email , password} = req.body;

    const emailAlreadyExist = await User.findOne({email})
    if(emailAlreadyExist){
        throw new BadRequestError("Email already exist")
    }

    const user = await User.create({
        name , email , password 
    })

    const tokenUser = createToken(user);

    attachCookiesToResponse({res, user:tokenUser})

    res.status(StatusCodes.CREATED).json({success:true , user:tokenUser})


}



const login = async(req, res)=>{
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if(!user){
        throw new NotFoundError(`No account found with email:${email}`)
    }

    const isPasswordCorrect = await user.comparePassword(password);


    if (!isPasswordCorrect) {
        throw new UnauthenticatedError("password and email did not match")
    }


    const tokenUser = createToken(user);

    attachCookiesToResponse({res, user:tokenUser})

    res.status(StatusCodes.CREATED).json({success:true , user:tokenUser})
}


const showUser = async(req, res)=>{
  
    res.status(StatusCodes.OK).json({success:true, user:req.user})  
}


const logout = async (req, res) => {
    
    res.cookie("token", "logout", {
      httpOnly: true,
      expires: new Date(Date.now() + 1000), //expiresin one second
    });
    res.status(StatusCodes.OK).json({ success: true, msg: "Customer logged out!" });
 
};


module.exports = { login, register, logout, showUser}