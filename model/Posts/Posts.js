const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Post title is required"],
        trim: true, 
    },
    description:{
        type:String,
        required: [true, "Post description is required"],

    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true , "Post category is required"],
    },
    numViews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }],
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }],
    disLikes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required: [true , "Please Author is required"]
    },
    photo:{
        type:String,
        required: [true , "Post Image is required"]
    }
},{
    timestamps: true,
});

//compile the post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;