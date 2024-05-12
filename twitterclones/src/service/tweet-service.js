import {TweetRepository ,HashtagRepository} from "../respository/index.js"

class TweetService{
         constructor(){
                 this.tweetRepository = new TweetRepository()
                 this.hashtagRepository = new HashtagRepository()
         }
           async create(data){
               const content = data.content
               const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=>tag.substring(1).toLowerCase())
              const tweet = await this.tweetRepository.create(data)

              let alreadyPresenttags =await this.hashtagRepository.findByName(tags)
              let titleOfPresenttags = alreadyPresenttags.map(tags=>tags.title)

              let newTags = tags.filter(tag=>!titleOfPresenttags.includes(tag))
              newTags = newTags.map((tag)=>{
                    return {title:tag , tweets:[tweet.id]}
              })

              await this.hashtagRepository.bulkCreate(newTags)
              alreadyPresenttags.forEach((tag)=>{
                  tag.tweets.push(tweet.id)
                  tag.save()
              })
              
              

           
              return tweet             
           }

           async get(id){
                   const tweet = await this.tweetRepository.getWithComment(id)
                   return tweet
           }
}


export default TweetService

