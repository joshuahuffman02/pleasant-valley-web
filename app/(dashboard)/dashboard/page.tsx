import { auth } from '@/lib/auth';

export default async function DashboardPage() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">Welcome, {session?.user?.name || 'User'}!</p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Spiritual Journey</h2>
        <p className="text-gray-600">Track your milestones and growth here.</p>
      </div>
    </main>
  );
}
