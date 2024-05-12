import Like from "../model/like.js";
import CrudRepository from "./crud-repository.js"

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like)
  }

  async findByUserAndLike(data) {
    try {
      const like = await Like.findOne(data)
      
      return like

    } catch (error) {
      console.log(error)
    }
  }
}


export default LikeRepository