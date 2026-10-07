import { Suspense } from "react";
import { connection } from "next/server";
import { supabase } from "@/lib/supabase";
import { sellOne } from "./actions";

async function ProductList() {
  await connection();
  const { data, error } = await supabase.from("products").select("*");
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul className="space-y-3">
      {data.map((p) => (
        <li key={p.id}>
          {p.name} - ₹{p.selling_price} - Stock: {p.stock}
          <form action={sellOne.bind(null, p.id)} className="inline ml-3">
            <button
              disabled={p.stock <= 0}
              className="rounded border px-2 py-1 text-sm disabled:opacity-40"
            >
              Sell 1
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}

export default function Products() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <ProductList />
      </Suspense>
    </main>
  );
}