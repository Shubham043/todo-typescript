import { Schema,model,Document } from "mongoose";

export interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    isUserVerified: boolean;
}

const UserSchema:Schema = new Schema({
    name:{type: String},
    email:{type:String},
    password:{type: String},
    isUserVerifed:{type:Boolean, default:false},
})
 
export default model<IUser>("User", UserSchema);