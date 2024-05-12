import CommentService from "../service/comment-service.js";

const commentservice = new CommentService()

export const createComment = async (req, res) => {
    try {
        const respones = await commentservice.createComment(req.query.modelId, req.query.modelType, req.body.userId, req.body.content)
        return res.status(202).json({
            success: true,
            message: "comment created successfully",
            data: respones,
            err: {}
        })
    } catch (error) {
        return res.status(501).json({
            success: false,
            message: "error",
            data: {},
            err: error
        })
    }


}