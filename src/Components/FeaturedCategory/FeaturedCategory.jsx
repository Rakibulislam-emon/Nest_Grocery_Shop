// "use client";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation } from "swiper/modules";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function FeaturedCategory() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [viewAll, setViewAll] = useState(false); // State to control grid view

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("https://fakestoreapi.com/products");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         setError(error.message || "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const categories = [...new Set(data.map((item) => item.category))]; // Get unique categories

//   const filteredData =
//     selectedCategory === "All"
//       ? data
//       : data.filter((item) => item.category === selectedCategory);

//   // References for Swiper navigation
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <section className="max-w-screen-2xl mx-auto lg:h-auto my-10  px-4 ">
//       <div className="flex justify-between lg:p-8">
//         <h1 className="md:text-4xl text-xl  font-bold">Featured Category</h1>
//         <div className="md:flex overflow-x-auto text-nowrap w-full hidden">
//           <Tabs>
//             <TabList className="flex gap-4">
//               {/* Initially set the first category */}
//               <Tab onClick={() => setSelectedCategory("All")}>All</Tab>
//               {categories.map((category, idx) => (
//                 <Tab key={idx} onClick={() => setSelectedCategory(category)}>
//                   {category}
//                 </Tab>
//               ))}
//             </TabList>
//           </Tabs>
//         </div>

//         <div className="flex gap-x-1 items-center">
//           {/* Show View All button when clicking on it */}
//           <button
//             onClick={() => setViewAll(!viewAll)} // Toggle grid view on button click
//             className="border mr-2 px-4 py-2 text-white bg-[#6bb252] hover:bg-[#ffc107] rounded-lg font-semibold"
//           >
//             View All
//           </button>
//           {/* Custom navigation buttons */}
//           <div className="flex gap-x-2">
//             <button
//               ref={prevRef}
//               className="text-gray-500 hover:text-black bg-[#eaeaea] hover:bg-[#6bb252] rounded-lg"
//             >
//               <FaAngleLeft size={40} />
//             </button>
//             <button
//               ref={nextRef}
//               className="text-gray-500 hover:text-black bg-[#eaeaea] hover:bg-[#6bb252] rounded-lg"
//             >
//               <FaAngleRight size={40} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {viewAll ? (
//         // Show grid view when "View All" is clicked
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 clear-both">
//           {data.map((item, idx) => (
//             <div key={idx} className="flex flex-col items-center ">
//               <Image
//                 width={200}
//                 height={200}
//                 src={item.image}
//                 alt={item.title}
//                 className="w-40 h-40 rounded-full object-cover"
//               />
//               <p className="text-center mt-2 text-lg font-medium">
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         // Default swiper view
//         <Swiper
//           spaceBetween={30} // Keep positive space to avoid overflow
//           loop={true} // Enable looping
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           onSwiper={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           modules={[Pagination, Navigation]}
//           breakpoints={{
//             375: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 4,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 4,
//               spaceBetween: 30,
//             },
//             1280: {
//               slidesPerView: 8,
//               spaceBetween: 40,
//             },
//           }}
//           className="mySwiper"
//         >
//           {filteredData.map((item, idx) => (
//             <SwiperSlide key={idx} className="flex flex-col items-center mt-8">
//               <div className="flex flex-col items-center">
//                 <Image
//                   width={200}
//                   height={200}
//                   src={item.image}
//                   alt={item.title}
//                   className="w-40 h-40 rounded-full object-cover"
//                 />
//                 <p className="text-center mt-2 text-lg font-medium">
//                   {item.title}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </section>
//   );
// }


import React from 'react'

export default function FeaturedCategory() {
  return (
    <div>FeaturedCategory</div>
  )
}
