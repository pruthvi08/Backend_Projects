import mongoose from "mongoose"

// define my tweet structure by mongoose schema using mongoose

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
        max: [250, 'Tweet cannot more than 250 characters']
    },
    likes:[{
          type:mongoose.Schema.Types.ObjectId,
          require:true,
          ref:'Like'
    }],
    comments:[{
            type:mongoose.Schema.Types.ObjectId,
            require:true,
            ref:'Comment'
    }],
    image:{
          type:String
    }


}, { timestamps: true })

// creating collection by using mongoose model using mongoose

const Tweet = new mongoose.model("Tweet", tweetSchema)

export default Tweet