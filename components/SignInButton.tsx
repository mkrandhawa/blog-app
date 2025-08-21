'use client';

import { signIn } from 'next-auth/react';
import { Github } from 'lucide-react'; // Import the Github icon

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn('github')}
      className="mt-6 flex w-full items-center justify-center gap-x-3 rounded-md bg-gray-800 px-4 py-2.5 text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    >
      <Github className="h-5 w-5" />
      <span>Sign in with GitHub</span>
    </button>
  );
}