import UserService from "../service/user-service.js";

const userservice = new UserService()

export const signup = async(req,res)=>{
         try {
               const respones = await userservice.signup(req.body)
               return res.status(202).json({
                      success:true,
                      message:'user create successfuly',
                      data:respones,
                      err:{}
               })
         } catch (error) {
                 return res.status(501).json({
                    success:false,
                    message:'error',
                    data:{},
                    err:error      
                 })
         }
}

