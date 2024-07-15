import mongoose, {Model} from "mongoose";
import { IPost, IPostDocument, IUser, IUserDocument } from "./interfaces";

const postSchema = new mongoose.Schema<IPostDocument>({
title: {
    type: String,
    require: true
},
header: {
    type: String,
    require:true
},
desc: {
    type: String,
    require: true
},
img: {
    type: String,
    require: true
},
slug:{
    type: String,
    require: true,
    unique: true
},
labels: {
    type: [String],
    require: true
},
},{
    timestamps: true
})

const userSchema = new mongoose.Schema<IUserDocument>({
    id: {
        type: String,
        unique: true, 
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role:{
        type: String,
        required: true,
        default: "admin"
    }
},{
    timestamps: true
})
export const User: Model<IUserDocument>  = mongoose.models?.User || mongoose.model("User", userSchema)
export const Post: Model<IPost> = mongoose.models?.Post || mongoose.model("Post", postSchema)

