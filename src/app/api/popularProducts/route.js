import { connectDb } from "@/lib/connectDb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDb();
    const products = await db.collection("all_products").find().toArray();
    const popularProducts = products.filter((product) => product.rating > 4.7);
    return NextResponse.json(popularProducts, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
