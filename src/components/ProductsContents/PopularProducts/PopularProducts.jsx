import React, { Suspense } from "react";
import PopularProductsTabs from "./PopularProductsTabs";


async function getData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/popularProducts`
    );
    const productsData = await response.json();
    return productsData;
  } catch (error) {
    console.error("Error fetching popular products:", error);
    return [];
  }
}

export default async function PopularProducts() {
   const productsData = await getData();

  return (
    <div>
        <Suspense fallback={<div>Loading products...</div>}>
        <PopularProductsTabs productsData={productsData} />
      </Suspense>
    </div>
  );
}
