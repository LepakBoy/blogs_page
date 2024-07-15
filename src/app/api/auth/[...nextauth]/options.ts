
import { connectToDb } from "@/lib/utils";
import CredentialsProvider from 'next-auth/providers/credentials';
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { User as UserSchemaModel } from "@/lib/models";

export const options = {
    session: {
        strategy:"jwt"
    },
    pages: {
        signIn: "/login"
    },
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name:"credentials",
            credentials: {
            email:{},
            password:{}
          },
          async authorize(credentials): Promise<any> {

            try {
                connectToDb()
        
                if(!credentials){
                    return null
                }
                const {email, password} = credentials;
                const user = await UserSchemaModel.findOne({email});
                // const passCorrect = user?.password === password
                // if(!passCorrect){
                //     throw new Error("wrong credential")
                // }
           

                // Response.redirect("http://localhost:3000/admin")
                // if(user){
                // const isVisitingAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup")

           
    
                // if user authenticated and try to visit auth page => redirect to chat page
                // if(user && isVisitingAuthPage){
                //     return Response.redirect(new URL("/admin", req.nextUrl))
                // }

                return user


            } catch (error) {
                console.log(error)
                return null
            }
          }
        })
    ], callbacks: {
   
        async jwt({token,user}: {token: JWT, user: User}): Promise<JWT>{

            // data yang dilempar ke session: 
            if(user){
                token.id = user.id;
                token.name = user.username;
                token.email = token.email;
                
            }
            return token
        },
        async session({ session, token }: {session: Session, token: JWT}):Promise<Session> {
            if (token) {
              session.user.id = token.id as string;
              session.user.role = token.role as string;
              session.user.email = token.email as string;
            }
            return session;
          },
        //   MOVED TO src/middleware.ts
        //   authorized({ auth, request }: {auth: Session | null, request: NextRequest}) {
        //     console.log(auth, 'auth.config');
        //     const user = auth?.user;
        //     const isOnAdminPage = request.nextUrl?.pathname.startsWith('/admin');
        //     const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
        //     const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');
      
        //     // ONLY ADMIN CAN REACH ADMIN PAGE
        //     if (isOnAdminPage && !user) {
        //       return false;
        //     }
      
        //     // ONLY AUTHENTICATED USER CAN REACH BLOG PAGE
        //     if (isOnBlogPage && !user) {
        //       return false;
        //     }
      
        //     // ONLY UNAUTHENTICATED USER CAN REACH LOGIN PAGE
        //     if (isOnLoginPage && user) {
        //       return Response.redirect(new URL('/', request.nextUrl));
        //     }
      
        //     return true;
        //   },
    }
}