import React from "react";
import ProductCard from "./Product/ProductCard";
import PopularProductsTabs from "./PopularProductsTabs";

export default function PopularProducts() {
  return (
    <div>
      <div>
        
        <PopularProductsTabs productsData={productsData} />
      </div>
    </div>
  );
}
const productsData = [
  {
    id: 1,
    name: "a",
    category: "Fruits",
    image: "https://i.ibb.co/4sx5Ng1/0e5313be7a8831b8ed60f8dab3c2df10.jpg",
    ratings: 4.5,
    originalPrice: 2.99,
    discountedPrice: 2.49,
    discount: "17% OFF",
    weight: "1 kg",
    expiry: "2024-12-20", // Example expiry date
  },
  {
    id: 2,
    name: "b",
    category: "Bakery",
    image: "https://i.ibb.co/4sx5Ng1/0e5313be7a8831b8ed60f8dab3c2df10.jpg",
    ratings: 4.2,
    originalPrice: 1.99,
    discountedPrice: 1.69,
    discount: "15% OFF",
    weight: "500g",
    expiry: "2024-12-15",
  },
  {
    id: 2,
    name: "c",
    category: "Beverages",
    image: "https://i.ibb.co/4sx5Ng1/0e5313be7a8831b8ed60f8dab3c2df10.jpg",
    ratings: 4.2,
    originalPrice: 1.99,
    discountedPrice: 1.69,
    discount: "15% OFF",
    weight: "500g",
    expiry: "2024-12-15",
  },
];
