import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async () => {
    try{

        connectToDb()
        const post = await Post.find()
        return NextResponse.json(post)
    }catch(err){
        console.log(err)
        throw new Error("failed to fecth data")
    }
}