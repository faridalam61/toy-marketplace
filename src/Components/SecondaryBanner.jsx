import React from "react";
import { Link } from "react-router-dom";

function SecondaryBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-28 px-10">
        <h2 className="text-3xl font-bold text-white">Exclusive RC cars</h2>
        <Link
          to="/all-toy"
          className="btn hover:bg-[#2EBFED] hover:border-[#2EBFED] border-[#ff6899] bg-[#ff6899] mt-9"
        >
          Shop Now
        </Link>
      </div>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-28 px-10">
        <h2 className="text-3xl font-bold text-white" data-aos="zoom-in">
          Children Electric cars
        </h2>
        <Link
          to="/all-toy"
          className="btn bg-[#2EBFED] border-[#2EBFED] hover:border-[#ff6899] hover:bg-[#ff6899] mt-9"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default SecondaryBanner;
