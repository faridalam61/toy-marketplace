import React from "react";
import { photos } from "./Photos";
import Gallery from "react-photo-gallery";

function PhotoGallery() {
  return (
    <div data-aos="zoom-in">
      <Gallery photos={photos} />;
    </div>
  );
}

export default PhotoGallery;
