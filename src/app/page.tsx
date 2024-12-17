"use client";
import React from "react";
import Hero from "./components/herosection";
import Brand from "./components/brand";
import Ceramics from "./components/ceramics";
import Product from "./components/product";
import Benefit from "./fonts/benefit";
import Touch from "./components/touch";
import ProductListing from "./productlisting/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <Ceramics />
      <Product />
      <Benefit />
      <Touch />
      <ProductListing />
    </>
  );
}
