import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import notFound from "../../public/404.webp";

function NotFound() {
  useTitle("404 - Not Found");
  return (
    <div className="text-center my-20">
      <img src={notFound} className="w-full lg:w-1/2 mx-auto" />
      <Link to="/" className="bg-[#E80D4A] text-white py-2 px-6 rounded-md">
        Return to homepage
      </Link>
    </div>
  );
}

export default NotFound;
