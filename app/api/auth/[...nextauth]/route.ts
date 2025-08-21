// app/api/auth/[...nextauth]/route.ts

import { handlers } from "@/auth" // This now correctly imports from your new auth.ts file
export const { GET, POST } = handlers;