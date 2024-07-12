const express = require("express");
const { userRegistrationCtrl, userLoginCtrl, getUser, getAllUsers, deleteUser, updateUser } = require("../../controllers/User/userCtrl");
const isLogin = require("../../middlewares/isLogin");
const userRouter = express.Router();

//routes
userRouter.post("/register",userRegistrationCtrl);

userRouter.post("/login", userLoginCtrl);

userRouter.get("/profile/:id",isLogin, getUser);

userRouter.get("", getAllUsers);

userRouter.delete("/:id", deleteUser);

userRouter.put("/:id", updateUser);

module.exports = userRouter;