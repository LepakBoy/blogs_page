import { Document } from "mongoose";

export interface IPost{
    title: string,
    header: string,
    desc: string,
    img: string,
    slug: string,
    labels: string[] | string,
    datePost?: Date
}


export interface IPostDocument extends IPost, Document{
    createdAt: Date,
    updatedAt: Date
}


export interface IInputForm{
    name: string;
    type: string;
    placeholder: string;
    value?: string
}