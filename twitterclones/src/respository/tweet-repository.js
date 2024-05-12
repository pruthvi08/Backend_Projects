import Tweet from "../model/tweet.js"
import CrudRepository from "./crud-repository.js"

class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet)
    }
    async create(data) {
        try {
            const tweet = await Tweet.create(data)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'comments' }).lean()
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndRemove(id)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }


    async find(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'likes' })
            // tweet.populate({path:"likes"})
            console.log(tweet)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id)
            // tweet.populate({path:"likes"})
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

}

export default TweetRepository