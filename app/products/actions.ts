"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export async function sellOne(id: string | number) {
  const { data } = await supabase
    .from("products")
    .select("stock")
    .eq("id", id)
    .single();

  if (!data || data.stock <= 0) return;

  await supabase
    .from("products")
    .update({ stock: data.stock - 1 })
    .eq("id", id);

  revalidatePath("/products");
}