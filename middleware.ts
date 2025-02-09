import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyAuth } from "./lib/auth"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err) => {
      console.error(err.message)
    }))

  if (request.nextUrl.pathname.startsWith("/api") && !verifiedToken) {
    return new NextResponse(JSON.stringify({ error: "authentication required" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    })
  }

  const authRoutes = ["/login", "/register"]
  if (!verifiedToken && !authRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*", "/((?!_next/static|favicon.ico).*)"],
}

