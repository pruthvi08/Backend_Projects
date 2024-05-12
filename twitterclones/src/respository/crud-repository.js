import { populate } from "dotenv"

class CrudRepository {
    constructor(model) {

        this.model = model
    }
    async create(data) {
        try {
            const result = await this.model.create(data)
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async destroy(id) {
        try {
            const result = await this.model.findByIdAndDelete(id)
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async update(id,data) {
        try {
            const result = await this.model.findByIdAndUpdate(id,data,{new:true})
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async get(id) {
        try {
         const result = await this.model.findById(id)
         return result
        } catch (error) {
            console.log(error)
        }
    }

    async getWithComment(id) {
        try {
         const result = await this.model.findById(id).populate({path:"comments",populate:{
            path:'comments'
         }}).lean()
         return result
        } catch (error) {
            console.log(error)
        }
    }
    async getAll() {
        try {
         const result = await this.model.find({})
         return result
        } catch (error) {
            console.log(error)
        }
    }
    // यहां पब्लिक इतनी बदमाश है की वीडियो राहुल गांधी का देखेगे और वोट मोदी को देगे क्या जुल्म हे 
}

export default CrudRepository