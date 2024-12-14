// "use client";
// import React, { useState, useEffect } from "react";
// import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css"; // Import default styling for tabs
// import ProductCard from "./Product/ProductCard"; // Your existing ProductCard component

// const FilterPopularProducts = ({ productsData }) => {
//   const [filteredProducts, setFilteredProducts] = useState(productsData);
//   const [categories, setCategories] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(0); // Track selected tab index

//   useEffect(() => {
//     // Fetch product categories dynamically from the API or productsData
//     const uniqueCategories = [
//       "All",
//       ...new Set(productsData.map((product) => product.category)),
//     ];
//     setCategories(uniqueCategories);
//   }, [productsData]); // Re-run this when productsData changes

//   const handleTabSelect = (index) => {
//     setSelectedIndex(index); // Update selected tab index
//     const selectedCategory = categories[index];
//     // Filter products based on selected category
//     if (selectedCategory === "All") {
//       setFilteredProducts(productsData); // Show all products
//     } else {
//       setFilteredProducts(
//         productsData.filter((product) => product.category === selectedCategory)
//       ); // Show filtered products based on category
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {/* Tabs Navigation */}
//       <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
//         <div className="flex justify-between">
//           <h2>Popular Products</h2>
//           <TabList className="flex space-x-4">
//             {categories.map((category, index) => (
//               <Tab
//                 key={category}
//                 className={`px-4 py-2 rounded cursor-pointer transition-all duration-200 ease-in-out ${
//                   selectedIndex === index
//                     ? "border-b-2 "
//                     : ""
//                 }`} // Apply active styles conditionally
//               >
//                 {category}
//               </Tab>
//             ))}
//           </TabList>
//         </div>

//         {/* Tab Panels */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredProducts?.map((product) => (
//             <ProductCard key={product.category} product={product} />
//           ))}
//         </div>
//       </Tabs>
//     </div>
//   );
// };

// export default FilterPopularProducts;


import React from 'react'

export default function PopularProductsTabs() {
  return (
    <div>PopularProductsTabs</div>
  )
}
