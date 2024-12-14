import Container from "@/components/Container";
import FeaturedCategory from "@/components/FeaturedCategory/FeaturedCategory";
import Header from "@/components/Header/Header";
import Hero from "@/components/HeroSection/Hero";
import ProductsContents from "@/components/ProductsContents/ProductsContents";
import React from "react";

export default function page() {
  return (
    <Container>
      <Header/>
      <Hero/>
      <FeaturedCategory/>
      <ProductsContents/>
    </Container>
  );
}
