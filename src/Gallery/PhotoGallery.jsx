import React from "react";
import { photos } from "./Photos";
import Gallery from "react-photo-gallery";

function PhotoGallery() {
  return (
    <div>
      <Gallery photos={photos} />;
    </div>
  );
}

export default PhotoGallery;
