import mongoose from "mongoose"

// define structure of document

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique:true
    },
    tweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }]
}, { timestamps: true })


// creating collection by using mongoose model

const Hashtag = mongoose.model("Hashtag", hashtagSchema)

export default Hashtag