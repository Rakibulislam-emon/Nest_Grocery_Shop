import React from "react";
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
