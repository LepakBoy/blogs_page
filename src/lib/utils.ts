import mongoose, { Connection } from "mongoose";

let connection: Connection | null = null

export const connectToDb = async () => {
    if(connection){
        console.log("using existing connection")
        return connection;
    }

    try{
     
        const db = await mongoose.connect("mongodb://localhost:27017/blogs");
        connection =  db.connection;

        console.log("connect to DB");
        return connection;
        
    }catch(error){
        console.log(error);
        throw error
    }
}