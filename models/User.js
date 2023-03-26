import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "It is mandatory to have a username"],
        minLength: [5, "Please enter atleast 5 characters"],
        unique: true
    },

    password:{
        type: String,
        required: [true, "Please provide a password field"],
        minLength: 6,
        select: false
    },

    password_repeat:{
        type: String , 
        required: [true, "Password repeat is required"],
        select: false,
        validate:{
            validator:function(val){
                return (this.password === val)
            },
            message: "Password and Password Repeat should match"
        }
    }

})


const User = mongoose.model('User', userSchema)
export default User