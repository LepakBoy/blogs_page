import NextAuth from "next-auth/next";

declare module "next-auth"{
    interface Session{
        user: {
            id: string;
            role: string;
            email: string;
            username: string;
        }
        expires: string
    }

    interface User {
        id: string;
        role: string;
        username: string;
        email: string;
    }

    interface JWT{
        id: string;
        role: string;
        username: string;
        email: string
    }

    interface Profile {
        username: string;
        email: string;
    }
}

