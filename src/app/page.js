import Container from "@/components/Container";
import FeaturedCategory from "@/components/FeaturedCategory/FeaturedCategory";
import Header from "@/components/Header/Header";
import Hero from "@/components/HeroSection/Hero";
import FilterToggleButton from "@/components/ProductsContents/Filter/FilterToggleButton";
import PopularProducts from "@/components/ProductsContents/PopularProducts/PopularProducts";
import React from "react";

export default function page() {
  return (
    <Container>
      <Header/>
      <Hero/>
      <FeaturedCategory/>
      <FilterToggleButton/>
      <PopularProducts/>
    </Container>
  );
}
