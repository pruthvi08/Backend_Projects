import mongoose from "mongoose"


// define document structure by using schema
const commmentSchema = new mongoose.Schema({
    content:{
    type:String,
    require:true,
    max:[250,"comment cannot more than 250 characters"]
    },
    userId:{
        type:String,
        ref:'User',
        require:true
    },
    onModel:{
        type:String,
        require:true,
        enum:['Tweet','Comment']
    },
    Commentable:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        refPath:'onModel'
    },
     comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
},{timestamps:true})


// creating collection by using model
const Comment = new mongoose.model("Comment",commmentSchema) 
export default Comment;