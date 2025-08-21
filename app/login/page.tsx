// app/login/page.tsx
import SignInButton from "@/components/SignInButton";

export default function LoginPage() {
  return (

    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="rounded-lg border bg-white p-8 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-gray-400">Welcome Back!</h1>
        <p className="mt-2 text-gray-600">
          Sign in to continue to your account.
        </p>
        <SignInButton />
      </div>
    </div>
  );
}