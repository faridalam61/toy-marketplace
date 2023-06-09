import React from "react";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";

function ToyCard({ toys }) {
  console.log(toys);
  const { _id, image, name, seller, category, price, qty } = toys;
  return (
    <div className="shadow-md rounded-md">
      <div className="bg-slate-100 rounded-lg p-6 mb-2">
        <img src={image ? image : logo} alt={name} className="mx-auto h-40" />
      </div>
      <div className="h-40 px-4">
        <h1 className="text-lg text-black">{name}</h1>
        <p>Seller: {seller}</p>
        <p>Category: {category}</p>
        <p>Available stock {qty} </p>
        <p className="text-bold text-lg text-black">${price} USD</p>
      </div>
      <div className="px-4 pb-4">

      <Link
        to={`/product-details/${_id}`}
        className="btn hover:bg-[#2EBFED] hover:border-[#2EBFED] border-[#ff6899] bg-[#ff6899] w-full"
      >
        View Details
      </Link>
      </div>
    </div>
  );
}

export default ToyCard;
