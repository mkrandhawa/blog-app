// middleware.ts

import { auth } from "@/auth"

export default auth

export const config = {
  // The matcher specifies which routes the middleware will run on
  matcher: ["/admin"],
}