import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Cookies from 'js-cookie';
 
export function middleware(request: NextRequest) {
  const token = Cookies.get('token');
  if(!token){
      return NextResponse.redirect(new URL('/login', request.url))
  }
  if (request.nextUrl.pathname.startsWith('/')) {
    return NextResponse.rewrite(new URL('/about', request.url))
  }
}
 export const config = {
  matcher: ['/:path ','/about/:path*']
}