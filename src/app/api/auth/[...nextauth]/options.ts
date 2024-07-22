import { connectToDb } from "@/lib/utils";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google"
import { Account, Profile, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { User as UserSchemaModel } from "@/lib/models";
import Swal from "sweetalert2";
import Github from "next-auth/providers/github";

export const options = {
    session: {
        strategy:"jwt",
        // maxAge: 30 * 24 * 60 * 60
    },
    pages: {
        signIn: "/login"
    },
    secret: process.env.AUTH_SECRET,
    providers: [Github({
        clientId: process.env.AUTH_GITHUB_ID as string,
        clientSecret: process.env.AUTH_GITHUB_SECRET as string
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
    }),
        CredentialsProvider({
            name: "Credentials",
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
                const passCorrect = user?.password === password
                if(!passCorrect){
                    Swal.fire({
                        icon:"error",
                        text:"Invalid password or email"
                    })
                    throw new Error("wrong credential")
                }

                return user

            } catch (error) {
                Swal.fire({
                    icon:"error",
                    text:"ee"
                })
                console.log(error, "error option login")
                return null
            }
          }
        })
    ], callbacks: {
        async signIn({account, profile} : {account: Account, profile: Profile}){
            if(account?.provider === "github"){
                await connectToDb()
                try {
                    const user = await UserSchemaModel.findOne({email: profile?.email})
                    if(!user){
                    const newUser = await UserSchemaModel.create({
                        username : profile?.login,
                        email: profile?.email,
                        id: profile?.id
                    })

                    await newUser.save()
                }
                return true

                } catch (error) {
                    console.log(error)
                    return false
                }
            }
            if(account?.provider === "google"){
                return profile.email_verified
            }
            return true
        },
   
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