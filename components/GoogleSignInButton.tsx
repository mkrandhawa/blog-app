'use client';

import { signIn } from 'next-auth/react';


export default function GoogleSignInButton() {
  return (
    <button
      onClick={() => signIn('google')}
      className="mt-4 flex w-full items-center justify-center gap-x-3 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    >
      <span>Sign in with Google</span>
    </button>
  );
}