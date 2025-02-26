import jwt from 'jsonwebtoken';

export const generateToken = (userId) =>{
   return jwt.sign({userId},process.env.SECRET_JWT_KEY,{ expiresIn: '1h' })
}

export const verifyToken = (token)=>{
   return jwt.verify(token,process.env.SECRET_JWT_KEY);
}