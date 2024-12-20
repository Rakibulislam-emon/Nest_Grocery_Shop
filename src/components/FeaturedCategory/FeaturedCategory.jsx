"use client";
import { useEffect, useRef, useState } from "react";
import ViewAllGrid from "./ViewAllGrid";
import SwiperView from "./SwiperView";
import { fetchFeaturedProducts } from "@/utils/api/fetchFeaturedProducts";
import FeaturedNavigationButtons from "./NavigationButtons";
import Loader from "./Loading";



export default function FeaturedCategory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewAll, setViewAll] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const products = await fetchFeaturedProducts();
        setData(products);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  // const categories = ["All", ...new Set(data?.map((item) => item.category))];
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <section className="max-w-screen-2xl mx-auto lg:h-auto my-10 ">
      <div className=" lg:py-6 md:flex md:items-center md:justify-between  ">
        <h1 className="md:text-4xl text-2xl font-bold lg:text-start text-center py-4  ">
          Featured Category
        </h1>
        {/* <CategoryTabs
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        /> */}
        <FeaturedNavigationButtons
          prevRef={prevRef}
          nextRef={nextRef}
          toggleViewAll={() => setViewAll(!viewAll)}
        />
      </div>
      {viewAll ? (
        <ViewAllGrid data={filteredData} />
      ) : (
        <SwiperView data={filteredData} prevRef={prevRef} nextRef={nextRef} />
      )}
    </section>
  );
}
