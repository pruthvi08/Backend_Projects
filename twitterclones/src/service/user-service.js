import { UserRepository } from "../respository/index.js";

class UserService {
     constructor(){
           this.userrepository = new UserRepository()
     }
     async signup(data){
        try {
         
            const user = await this.userrepository.create(data)
            return user   
        } catch (error) {
            console.log(error)
        }
     }
}
export default UserService