// app/admin/page.tsx
import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 p-4 mt-10">
        <h1 className="text-2xl font-bold text-gray-400">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome, {session.user?.name}!</p>
        <div className="mt-4">
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt={session.user.name ?? "User Avatar"}
              width={80}
              height={80}
              className="mx-auto rounded-full"
            />
          )}
        </div>
        <p className="mt-4 text-sm text-gray-500">
          This page is protected by middleware.
        </p>
      </div>
    </main>
  );
}