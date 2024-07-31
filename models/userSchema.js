import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    fullname:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    password:{
        type:String,
        required: true,
    }
})
export default model("users", userSchema);
