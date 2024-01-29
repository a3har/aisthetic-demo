import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = request.cookies.get("session")

  //Return to /login if don't have a session
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

//Add your protected routes
export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - login (login page)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * - robots.txt (SEO file)
   * - sitemap.xml (SEO file)
   */
  matcher: [
    "/((?!api|login|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
