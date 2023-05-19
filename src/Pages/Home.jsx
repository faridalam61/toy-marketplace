import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import PhotoGallery from "../Gallery/PhotoGallery";
import ToyCard from "../Components/ToyCard";

function Home() {
  const [toys, setToys] = useState([]);
  const [tab, setTab] = useState("Race cars");

  useEffect(() => {
    fetch(`http://localhost:5000/category/${tab}`)
      .then((res) => res.json())
      .then((result) => setToys(result));
  }, [tab]);

  const handleTab = (tab) => {
    setTab(tab);
  };

  return (
    <div>
      <Hero />
      <PhotoGallery />
      <div className="container mx-auto">
        <h2 className="text-center text-2xl my-8">Shop By Categories</h2>
        <div className="flex justify-center mb-4 gap-8">
          <button
            onClick={() => handleTab("Race Cars")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Race Cars
          </button>
          <button
            onClick={() => handleTab("Ride-ons")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Ride-ons
          </button>
          <button
            onClick={() => handleTab("Remote Controlled")}
            className="hover:bg-orange-600 px-4 py-2 hover:text-white rounded-full"
          >
            Remote Controlled
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {toys.map((toy, idx) => (
            <ToyCard key={idx} toys={toy} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
