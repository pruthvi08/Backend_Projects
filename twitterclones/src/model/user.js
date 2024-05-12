import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
    ,
    email: {
        type: String,
        unique: true,
        require: true
    },

    password: {
        type: String,
        require: true
    }
})

// meadlwear

// userSchema.pre("save", async function (next) {

//         if (this.isModified("password")) {
//             this.password =await bcrypt.hash(this.password, 8)
//         }
//         next()
           
// })

// register.pre("save", async function (next) {
//     if (this.isModified("password")) {

//         this.password = await bcryptjs.hash(this.password, 8);
//         this.confirmpassword = await bcryptjs.hash(this.confirmpassword, 8);;

//     }
//     next();
// })

const User = mongoose.model("User", userSchema)

export default User






// India :- Hindu vs Muslim
// Israel :- Jews vs Muslim
// Europe and America :- Christian vs Muslim
// Myanmar :- Buddhist vs Muslim(Rohingya) 
// Bangladesh :- Hindu vs Muslim
// Middle East Country :- Shia muslim vs Sunni muslim
// Nigeria :- Christian vs Muslim
// And they say
// Islam is the most peaceful 