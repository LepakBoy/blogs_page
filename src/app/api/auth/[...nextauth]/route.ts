import NextAuth from "next-auth/next";

import { options } from "./options";


const handler = NextAuth(options as any)

export {handler as GET, handler as POST}



