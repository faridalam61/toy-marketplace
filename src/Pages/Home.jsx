import React from "react";
import Hero from "../Components/Hero";
import PhotoGallery from "../Gallery/PhotoGallery";
import ProductsTab from "../Components/ProductsTab";

function Home() {
  return (
    <div>
      <Hero />
      <PhotoGallery />
      <ProductsTab />
    </div>
  );
}

export default Home;
