'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  const handleSignIn = () => {
    signIn('linkedin', { callbackUrl: '/dashboard' });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 bg-gray-50">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-primary mb-8">
          LinkedIn Content Automation
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          AI-powered content generation and scheduling for LinkedIn
        </p>
        <button
          onClick={handleSignIn}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary text-white hover:bg-blue-700 transition-colors"
        >
          {status === 'loading' ? (
            <span>Loading...</span>
          ) : (
            <span>Sign in with LinkedIn</span>
          )}
        </button>
      </div>
    </main>
  );
} 