// components/SignInButton.tsx
'use client';

import { signIn } from 'next-auth/react';

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn('github')}
      className="mt-4 rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
    >
      Sign in with GitHub
    </button>
  );
}