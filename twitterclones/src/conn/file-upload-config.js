import multer from 'multer'
import multerS3 from 'multer-s3'
import {DynamoDBClient}from '@aws-sdk/client-dynamodb'
import { S3Client } from '@aws-sdk/client-s3'
// import aws from 'aws-sdk'
import dotenv from 'dotenv'

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";


// const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
// const region = 'ap-southeast-2'



const s3 = new S3Client({
    credentials: {
        accessKeyId: 'process.env.AWS_ACCESS_KEY_ID',
        secretAccessKey: 'process.env.AWS_SECRET_ACCESS_KEY',
    },
    region:'ap-southeast-2',
  });
  
  const upload = multer({
    storage: multerS3({
      s3,
      bucket:"canyoudigit",
 // Adjust ACL as needed (e.g., private)
    acl:"public-read",
      contentType: function (req, file, cb) {
        cb(null, file.mimetype);
      },
      key: function (req, file, cb) {
        // Customize filename generation (optional)
        cb(null, Date.now() + "-" + file.originalname);
      },
    }),
  });


  export default upload

// import multer from 'multer'
// import multers3 from 'multer-s3'
// import DynamoDBClient from '@aws-sdk/client-dynamodb'
// // import { S3Client } from '@aws-sdk/client-s3'
// import aws from 'aws-sdk'
// import dotenv from 'dotenv'

// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { Upload } from "@aws-sdk/lib-storage";


// dotenv.config()

// S3Client.config.

// const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
// const region = process.env.S3_REGION;
// const bucketName = process.env.S3_BUCKET;




// const upload = multer({
//     storage : multers3({
//        s3:s3,
//        bucket: process.env.S3_BUCKET,
//        acl:'public-read',
//        metadata:function(req,file,cb){
//         cb(null,{fieldName:file.fieldname})
//        },
//        key: function(req,file,cb){
//           cb(null,Date.now(),toString())
//        }

//     })
// }
// )
// export default upload