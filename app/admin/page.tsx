// app/admin/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CreatePostForm from "@/components/CreatePostForm";


export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 p-4 mt-10">
        <h1 className="mt-2 text-gray-600 text-xl">Welcome, {session.user?.name}!</h1>
        <CreatePostForm user={session.user} />
      </div>
    </main>
  );
}