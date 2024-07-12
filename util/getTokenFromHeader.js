const getTokenFromHeader = (req)=>{
    console.log(req.headers);
    if(req.headers.authorization){
        const headerObj = req.headers
        const token = headerObj["authorization"].split(" ")[1];
        if(token!==undefined){
            return token;
        }else{
            return false;
        }
    }else{
        return false;
    }
    
};

module.exports = getTokenFromHeader;