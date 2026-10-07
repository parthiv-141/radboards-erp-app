import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Radboards ERP</h1>
      <nav className="flex flex-col gap-3 w-64">
        <Link
          href="/products"
          className="rounded-lg border px-4 py-3 text-center hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Products
        </Link>
      </nav>
    </main>
  );
}