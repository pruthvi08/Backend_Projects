import mongoose from "mongoose";

// define document by using schema

const likeSchema = new mongoose.Schema({
  onModel: {
    type: String,
    require: true,
    enum: ['Tweet', 'Comment']
  }
  ,
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    refPath: 'onModel'
  }
  ,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  }

})

// creating collection by using model

const Like = mongoose.model("Like", likeSchema)

export default Like
