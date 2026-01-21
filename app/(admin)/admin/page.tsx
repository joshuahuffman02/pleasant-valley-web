import { auth } from '@/lib/auth';

export default async function AdminPage() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg">Welcome, {session?.user?.name}!</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-gray-600">Manage church members and users</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Sermons</h2>
          <p className="text-gray-600">Upload and manage sermon content</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Events</h2>
          <p className="text-gray-600">Create and manage church events</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Giving</h2>
          <p className="text-gray-600">Track and manage giving campaigns</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Planning Center</h2>
          <p className="text-gray-600">Sync data with Planning Center</p>
        </div>
      </div>
    </main>
  );
}
