import Container from "@/components/Container";
import Header from "@/components/Header/Header";
import Hero from "@/components/HeroSection/Hero";
import ProductsContents from "@/components/ProductsContents/ProductsContents";
import React from "react";

export default function page() {
  return (
    <Container>
      <Header/>
      <Hero/>
      <ProductsContents/>
    </Container>
  );
}
