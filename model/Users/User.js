const mongoose = require('mongoose');
const { type } = require('os');

//create schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
    },
    profilePhoto: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    postCount: {
        type: Number,
        default: 0,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ["Admin","Guest","Editor"],
    },
    viewedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    }],
    active: {
        type: Boolean,
        default: true
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PostModel"
    }],
},{
    timestamps: true,
});

//compile the user model
const User = mongoose.model('User', userSchema);

module.exports = User;

// app.use((req,res,next)=>{
//     if(userAuth.isLogin){
//         next();
//     }else{
//         return res.json({
//             msg:'Invalid LOGIN creds'
//         })
//     }
// })