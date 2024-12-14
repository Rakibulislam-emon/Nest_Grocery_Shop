import React from "react";
import Filter from "./Filter/Filter";
import NewProducts from "./NewProducts/NewProducts";
import PopularProducts from "./PopularProducts/PopularProducts";
import FilterToggleButton from "./Filter/FilterToggleButton";

export default function ProductsContents() {
  return (
    <div>
      <FilterToggleButton />
      <PopularProducts />
    </div>
  );
}
