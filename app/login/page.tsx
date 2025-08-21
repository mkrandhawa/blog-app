// app/login/page.tsx
import SignInButton from "@/components/SignInButton";
import Link from "next/link";
import GoogleSignInButton from "@/components/GoogleSignInButton";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-wrap">
      {/* Branding Section (Left Side) */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center bg-gray-600 text-white lg:flex">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance">
            Welcome to BlogSpot
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A space for discovery, learning, and growth.
          </p>
        </div>
      </div>

      {/* Login Form Section (Right Side) */}
      <div className="flex w-full items-center justify-center bg-gray-100 p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-gray-600">
              Sign in to continue to your account.
            </p>
          </div>
          
          <SignInButton />
          <GoogleSignInButton />

          <p className="mt-8 text-center text-sm text-gray-500">
            <Link href="/" className="font-medium text-indigo-600 hover:underline">
              &larr; Back to homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}