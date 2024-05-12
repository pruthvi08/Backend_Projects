import { model } from "mongoose";
import { LikeRepository, TweetRepository } from "../respository/index.js";

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository()
        this.tweetRepository = new TweetRepository()
    }

    async toggleLike(modelId, modelType, userId) {
        console.log(modelId)
        if (modelType == "Tweet") {
            var likeable = await this.tweetRepository.find(modelId)
         
        }
        else if (modelType == "Comment") {

        }
        else {
            console.log('unknow model type')
        }
        const exists = await this.likeRepository.findByUserAndLike({
            user: userId,
            onModel: modelType,
            likeable: modelId

        })
        if (exists) {
            likeable.likes.pull(exists.id)
            await likeable.save()
            await exists.deleteOne()
            var isAdded = false
        }
        else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            })
            likeable.likes.push(newLike)
            await likeable.save()
            var isAdded = true
        }
        return isAdded
    }


}

export default LikeService