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

export const getPostBySlug = async (slug: string) => {
    try {
        connectToDb()
        const post = await Post.findOne({slug})
        return post
    } catch (error) {
        console.log(error)
        throw new Error("failed to get data")
    }
}