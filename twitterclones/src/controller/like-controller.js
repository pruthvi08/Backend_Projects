import LikeService from "../service/like-service.js";

const likeservice = new LikeService()

export const toggleLike = async(req,res)=>{
  
    try {
           const respones = await likeservice.toggleLike(req.query.modelId,req.query.modelType,req.body.userId)
           return res.status(201).json({
                 success:true,
                 message:"like create successfuly",
                 data:respones,
                 err:{}
           })
    } catch (error) {
        return res.status(500).json({
               success:false, 
               message:"error",
               data:{},
               err:error
        })        
    }

}