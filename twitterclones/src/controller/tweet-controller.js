import TweetService from "../service/tweet-service.js";
import upload from "../conn/file-upload-config.js"

const singleuploader = upload.single('image')
const TweetServices = new TweetService()


export const createTweet = async (req, res) => {
     try {

          singleuploader(req, res, async function (err, data) {
               if (err) {
                    return res.status(500).json({
                         error: err
                    }
                    )
               }
               console.log('image url is', req.file)
               const payload = { ...req.body }
               payload.image = req.file.location
               const respones = await TweetServices.create(payload)
               return res.status(202).json({
                    success: true,
                    message: "tweet create successfuly",
                    data: respones,
                    err: {}
               })
          })
          // Use Multer middleware to handle file upload to S3





          // 
          // return res.status(202).json({
          //    
          // })
     } catch (error) {
          res.status(500).json({
               success: false,
               message: "error",
               data: {},
               err: error

          })
     }
}

export const getTweet = async (req, res) => {
     try {
          const respones = await TweetServices.get(req.params.id)
          return res.status(202).json({
               success: true,
               message: "get tweet successfuly",
               data: respones,
               err: {}
          })
     } catch (error) {
          res.status(500).json({
               success: false,
               message: "error",
               data: {},
               err: error

          })
     }
}