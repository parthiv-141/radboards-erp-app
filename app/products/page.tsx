import { Suspense } from "react";
import { connection } from "next/server";
import { supabase } from "@/lib/supabase";

async function ProductList() {
  await connection();
  const { data, error } = await supabase.from("products").select("*");
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
      {data.map((p) => (
        <li key={p.id}>
          {p.name} - ₹{p.selling_price} - Stock: {p.stock}
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
