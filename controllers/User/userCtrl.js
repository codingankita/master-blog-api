const bcrypt = require("bcryptjs");
const User = require("../../model/Users/User");
const generateToken = require("../../util/generateToken");

const userRegistrationCtrl = async(req, res)=>{
    const {firstName,lastName,email,password}=req.body;
    try {
        //check if email exists
        const userFound = await User.findOne({email});
        if(userFound){
            return res.json({
                msg: 'User Already Exists'
            })
        }
        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        // create the user
        const user = await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword
        })
        console.log(req.body);
        res.json({
            status: "success",
            data: user
        })
    } catch (error) {
        res.json(error.message);
    }
}

const userLoginCtrl = async(req, res)=>{
    const {email,password}=req.body;
    try {
        //check if email exists
        const userFound = await User.findOne({email});
        if(!userFound){
            return res.json({
                msg:"Invalid log-in credentials"
            });
        }
        //validity of the password
        const isPasswordMatched = await bcrypt.compare(
            password,
            userFound.password
        );
        console.log(isPasswordMatched);
        if(!isPasswordMatched){
            return res.json({
                msg:"Invalid log-in credentials"
            });
        }
        res.json({
            status: "success",
            data: {
                firstName: userFound.firstName,
                lastName: userFound.lastName,
                email: userFound.email,
                isAdmin: userFound.isAdmin,
                token: generateToken(userFound._id)
            }
        })
    } catch (error) {
        res.json(error.message);
    }
}

const getAllUsers = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "Profile route"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const getUser = async(req, res)=>{
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if(user){
            res.json({
                status: "success",
                data: user
            })
        }else{
            res.json({
                status: "failed",
                data: "No such user"
            })
        }
    } catch (error) {
        res.json(error.message);
    }
}

const deleteUser = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "Profile deleted"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const updateUser = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "Profile updated"
        })
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = {
    userRegistrationCtrl,
    userLoginCtrl,
    getUser,
    getAllUsers,
    deleteUser,
    updateUser
}