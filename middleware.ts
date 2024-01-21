import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup"

    if(loggedInUserNotAccessPaths){
      if(token){
       return NextResponse.redirect(new URL('/', request.url))
      }
    }else{
      if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
      }
    }
}
export const config = {
  matcher: ['/about/:path*',
'/login/:path*',
'/signup',
'/'
]
}