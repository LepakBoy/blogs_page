import mongoose, {Model} from "mongoose";
import { IPost } from "./interfaces";
import { timeStamp } from "console";

const postSchema = new mongoose.Schema<IPost>({
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
datePost: {
    type: Date,
    require: true
}
},{
    timestamps: true
})

export const Post: Model<IPost> = mongoose.models?.Post || mongoose.model("Post", postSchema)