const express = require("express");
const { createCommentCtrl, getCommentCtrl, getAllCommentsCtrl, deleteCommentCtrl, updateCommentCtrl } = require("../../controllers/Comments/commentCtrl");
const commentRouter = express.Router();

//routes
commentRouter.post("",createCommentCtrl);

commentRouter.get("/:id", getCommentCtrl);

commentRouter.get("", getAllCommentsCtrl);

commentRouter.delete("/:id", deleteCommentCtrl);

commentRouter.put("/:id", updateCommentCtrl);

module.exports = commentRouter;