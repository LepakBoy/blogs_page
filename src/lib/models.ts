import mongoose, {Model} from "mongoose";
import { IPost, IPostDocument } from "./interfaces";

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

export const Post: Model<IPost> = mongoose.models?.Post || mongoose.model("Post", postSchema)