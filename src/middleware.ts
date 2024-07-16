import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';


// export default NextAuth(options).auth;
export async function middleware(req: NextRequest) {
	const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  
	const { pathname } = req.nextUrl;
  
	const isOnAdminPage = pathname.startsWith('/admin');
	const isOnBlogPage = pathname.startsWith('/blog');
	const isOnLoginPage = pathname.startsWith('/login');
  
	// Redirect logic based on the user's role and the page they are trying to access
  
	// ONLY ADMIN CAN REACH ADMIN PAGE(not implemented yet)
	// if (isOnAdminPage && token?.role !== 'admin') {
	//   return NextResponse.redirect(new URL('/403', req.url)); // Redirect to a 403 forbidden page or any other page
	// }

		if (isOnAdminPage && !token) {
	  return NextResponse.redirect(new URL('/login', req.url)); // Redirect to a 403 forbidden page or any other page
	}
  

  
	// ONLY UNAUTHENTICATED USER CAN REACH LOGIN PAGE
	if (isOnLoginPage && token) {
	//   return NextResponse.redirect(new URL('/', req.url)); 
	  // Redirect to home page

	  return Response.redirect(new URL("/", req.nextUrl))
	}

  
	return NextResponse.next();
  }

  

// We add a little extra rule (config) saying that the authentication should apply to most paths, but not to paths that include "api," "_next/static," "_next/image," or have a file extension of ".png."
// export const config = {
// 	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };


export const config = {
	matcher: ['/admin/:path*', '/login'], // Paths where the middleware should run
  };