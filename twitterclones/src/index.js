import express from 'express'
const app = express()
const port = process.env.PORT || 2345
import { connect } from "./conn/conn.js"

import Tweetservices from './service/tweet-service.js'

import UserRepository from './respository/user-repository.js'

import CommentRepository from './respository/comment-repository.js'

import LikeService from './service/like-service.js'
import TweetRepository from './respository/tweet-repository.js'
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser'
import CommentService from './service/comment-service.js'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api',apiRoutes)

app.listen(port,async ()=>{
      console.log(`request listening ${port}`) 
      await connect()

         const likeservice = new LikeService()
         const tweetRepo = new TweetRepository()
         const userrepo = new UserRepository()
  
