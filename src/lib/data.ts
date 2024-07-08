import { Post } from "./models"
import { connectToDb } from "./utils"

export const getPosts = async() => {
    try{
        connectToDb()
        const posts = await Post.find()
        return posts
    }catch(err){
        console.log(err)
        throw new Error("failed to get data")
    }
}