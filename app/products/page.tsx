import { supabase } from "@/lib/supabase";

export default async function Products() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) return <p>Error: {error.message}</p>;
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul>
        {data.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.selling_price}
          </li>
        ))}
      </ul>
    </main>
  );
}