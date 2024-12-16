import { connectDb } from "@/lib/connectDb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDb();
    const products = await db.collection("all_products").find().toArray();

    // Extract category names and remove duplicates using Set
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];

    // Create an array to hold results by category
    const categoryResults = categories.map((category) => {
      const categoryProducts = products.filter((product) => product.category === category).slice(0, 1); // Limit to 3 products per category
      return {
        category,
        products: categoryProducts
      };
    });

    return NextResponse.json(categoryResults, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
