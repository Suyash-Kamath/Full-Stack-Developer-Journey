import jwt from "jsonwebtoken"

const isAuthenticated = async (req,res,next)=>{
    try {
        const token = req.cookies.token
        console.log(token);
        
        if(!token){
            res.status(401).json({
                success:false,
                message:"User not authenticated"
            })
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
       
        
        // decode will have userId;

        if(!decoded){
           return  res.status(401).json({
                success:false,
                message:"Invalid token"
            })
        }
        console.log(decoded);

        req.id = decoded.userId // const req = {id:" "} , this means this

        next();
    } catch (error) {
        console.log(error.message);
        
    }
}

export default isAuthenticated