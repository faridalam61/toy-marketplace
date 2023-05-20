import React from "react";
import banner from "../../public/banner.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("${banner}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">ONE BOX OF TOY</h1>
          <p className="mb-5">
            Flat 10% off on order avobe $49.99
          </p>
          <Link to='/all-toy' className="btn hover:bg-[#2EBFED] hover:border-[#2EBFED] border-[#ff6899] bg-[#ff6899]">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
