import { verifyToken } from "../utils/manageToken.utils.js";

function verifyUser(req,res,next){
    try {
        const token = req.cookies;        
        const verifiedToken = verifyToken(token.authUser);     
        req.body.userId = verifiedToken.userId;
        next();
    } catch (error) {
        console.log('error while verifying user',error);
    }
}

export default verifyUser;