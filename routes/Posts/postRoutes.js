const express = require("express");
const { createPostCtrl, getOnePostCtrl, getAllPostsCtrl, deletePostCtrl, updatePostCtrl } = require("../../controllers/Posts/postCtrl");
const postRouter = express.Router();

//routes
postRouter.post("",createPostCtrl);

postRouter.get("/:id", getOnePostCtrl);

postRouter.get("", getAllPostsCtrl);

postRouter.delete("/:id", deletePostCtrl);

postRouter.put("/:id", updatePostCtrl);

module.exports = postRouter;