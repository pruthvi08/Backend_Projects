import express from 'express'

import { createTweet } from '../../controller/tweet-controller.js'

import { toggleLike } from '../../controller/like-controller.js'

import { createComment } from '../../controller/comment-controller.js'

import { getTweet } from '../../controller/tweet-controller.js'

import { signup } from '../../controller/auth-controller.js'



const router = express.Router()

router.post("/tweets",createTweet)

router.post("/toggle",toggleLike)

router.post("/user",signup)

router.post("/comment",createComment)

router.get("/gettweet/:id",getTweet)


export default router