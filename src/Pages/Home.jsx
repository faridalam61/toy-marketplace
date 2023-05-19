import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import PhotoGallery from "../Gallery/PhotoGallery";
import ToyCard from "../Components/ToyCard";

function Home() {
  const [toys, setToys] = useState([]);
  const [tab, setTab] = useState("Go");
  const [subCategory, setSubCategory] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/category/${tab}`)
      .then((res) => res.json())
      .then((result) => setToys(result));
  }, [tab]);

  const handleSubCategory = (subCat) => {
    setSubCategory(subCat);
  };

  const handleTab = (tab) => {
    setTab(tab);
  };

  return (
    <div>
      <Hero />
      <PhotoGallery />

      <div className="container mx-auto">
        <h2 className="text-center font-bold text-xl my-8">Shop By Categoy</h2>
        <div className="flex justify-center gap-8">
          <button
            onClick={() => handleSubCategory("Go")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Go
          </button>
          <button
            onClick={() => handleSubCategory("Java")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Java
          </button>
          <button
            onClick={() => handleSubCategory("C")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            C
          </button>
        </div>
      </div>

      {subCategory == "Java" && (
        <div className="flex justify-center gap-8">
          <button
            onClick={() => handleTab("Go")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Java sub
          </button>
          <button
            onClick={() => handleTab("Java")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Java sub 2
          </button>
          <button
            onClick={() => handleTab("C")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Java sub 3
          </button>
        </div>
      )}
      {subCategory == "Go" && (
        <div className="flex justify-center gap-8">
          <button
            onClick={() => handleTab("Go")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Go sub
          </button>
          <button
            onClick={() => handleTab("Java")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Go sub 2
          </button>
          <button
            onClick={() => handleTab("C")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Go sub 3
          </button>
        </div>
      )}
      {subCategory == "C" && (
        <div className="flex justify-center gap-8">
          <button
            onClick={() => handleTab("Go")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            C sub
          </button>
          <button
            onClick={() => handleTab("Java")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            C sub 2
          </button>
          <button
            onClick={() => handleTab("C")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            C sub 3
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {toys.map((toy) => (
          <ToyCard toys={toy} />
        ))}
      </div>
    </div>
  );
}

export default Home;
