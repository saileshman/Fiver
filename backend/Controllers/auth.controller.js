const userModel = require("../Model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = +process.env.SALT;

// user signin
const Register = async(req,res)=>{
    try {
        const {email,password,username,country,phone} = req.body;
        const isEmail = await userModel.findOne({email});
        if(isEmail) return res.status(400).send("Email Already Exist!");
        const hash = await bcrypt.hash(password,saltRounds)
        const user = await userModel.create({email,password:hash,username,country,phone})
        res.status(201).send({user});

       
    } catch (error) {
        //res.status(500).json()
        console.log(error);
    }
}

// for login
const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user) return res.status(401).send("User not Found!");
        const isPassword = await bcrypt.compare(password,user.password);
        const token = jwt.sign({id:user._id,isSeller: user.isSeller},process.env.JWT_SECRET);
        
  
        res.cookie("accessToken",token,{httpOnly:true}).status(200).send({ user: {
          id: user._id,
          email: user.email,
          username: user.username,
          country: user.country,
          phone: user.phone,
          isSeller: user.isSeller,
        }});
        
    } catch (error) {
        console.log(error)
    }
}

// logout
const Logout = async(req,res)=>{};

module.exports = {Register,Login,Logout};


