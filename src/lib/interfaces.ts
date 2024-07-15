import { Document } from "mongoose";
import { ChangeEventHandler } from "react";

export interface IPost{
    title: string,
    header: string,
    desc: string,
    img: string,
    slug: string,
    labels:  string[],
    createdAt?: Date,
    datePost?: Date
}


export interface IPostDocument extends IPost, Document{
    createdAt: Date,
    updatedAt: Date
}

export interface IUser {
    username: string;
    email: string;
    password:string;
    role: String;
}

export interface IUserDocument extends IUser, Document{
    createdAt: Date;
    updatedAt: Date;
}


export interface IInputForm{
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement> | any;
    onBlur?:any;
    error?: string;
    label?: string;
}

export interface IMessageInput {
    msg?: string
}