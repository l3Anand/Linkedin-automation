'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Metadata } from "next";
import DashboardNav from "@/components/dashboard/DashboardNav";

export const metadata: Metadata = {
  title: "Dashboard | LinkedIn Content Automation",
  description: "Manage your LinkedIn content and scheduling",
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Content Generator</h2>
            <p className="text-gray-600 mb-4">Create AI-powered content for your LinkedIn posts</p>
            <button
              onClick={() => router.push('/dashboard/generate')}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Create Content
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Scheduled Posts</h2>
            <p className="text-gray-600 mb-4">Manage your upcoming LinkedIn posts</p>
            <button
              onClick={() => router.push('/dashboard/scheduled')}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Schedule
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p className="text-gray-600 mb-4">Track your content performance</p>
            <button
              onClick={() => router.push('/dashboard/analytics')}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Analytics
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 