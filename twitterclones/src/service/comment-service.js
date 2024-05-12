import { model } from "mongoose";
import { CommentRepository ,TweetRepository } from "../respository/index.js";
import Tweet from "../model/tweet.js";

class CommentService {
  constructor() {

    this.commentrepository = new CommentRepository()
    this.tweetrepository = new TweetRepository()
  }
  async createComment(modelId, modelType, userId, content) {
    // console.log(modelId,modelType,userId,content)
    if (modelType == "Tweet") {
      var commentable = await this.tweetrepository.get(modelId)
      console.log(commentable)
    }
    else if (modelType == "Comment") {
      var commentable = await this.commentrepository.get(modelId)
      console.log(commentable)
    }
    else {
      console.log("unknow model type")
    }
    const comment = await this.commentrepository.create({
      content: content,
      userId: userId,
      commentable: modelId,
      onModel: modelType,
      comments: []
    })
    commentable.comments.push(comment)
    await commentable.save()

    return comment
  }


}

export default CommentService