import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import fs from "node:fs/promises"
import path from "node:path";

async function readAllFileNames(directory: string): Promise<string[]> {
    try {
        const files = await fs.readdir(directory);
        const fileNames = files.map(file => path.join(directory, file));
        return fileNames;
    } catch (error) {
        console.error('Error reading directory:', error);
        throw error;
    }
}

export async function POST(req: Request){
    console.log(req, "reeqqqq")
    try{
        const formData = await req.formData();
        const pathName = "./public/images"

        const file = formData.get("file") as File;
        const arrayBuffer = await file.arrayBuffer()
        const buffer = new Uint8Array(arrayBuffer);

        const fileName = file.name
        const filePath = path.join(process.cwd(), pathName, fileName )

        // try{
        //     await fs.access(filePath)
        //     return NextResponse.json({status: "fail", error:"file with the same name already exist"})
        // }catch(error){
        //     console.error("error: ", error)
        // }

        // readAllFileNames(path).then(fileNames => console.log("file:", fileNames)).catch(error => console.error("error", error))

  
        await fs.writeFile(`./public/images/${file.name}`, buffer)

        revalidatePath("/admin")
        return NextResponse.json({status:"success"})

    }catch(error){
        console.error(error);
        return NextResponse.json({status: "fail", error: error})
    }
}