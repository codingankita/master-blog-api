const getTokenFromHeader = require("../util/getTokenfromHeader");
const verifyToken = require("../util/verifyToken");

const isLogin = (req, res,next)=>{
    const token = getTokenFromHeader(req);
    const decodedUser = verifyToken(token);
    if(!decodedUser){
        return res.json({
            message : "Invalid/Expired token. Please try again with valid token",
        });
    }else{
        next();
    }
}

module.exports = isLogin;