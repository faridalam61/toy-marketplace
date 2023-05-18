import React from "react";
import { useLoaderData } from "react-router";

function ProductDetails() {
  const toy = useLoaderData();
  const {
    _id,
    name,
    seller,
    image,
    price,
    qty,
    category,
    subCategory,
    email,
    description,
    rating,
  } = toy;
  console.log(toy);
  return (
    <div className="w-3/4 mx-auto my-10">
      <div className="flex gap-6 justify-between ">
        <div className="w-1/2 flex items-center rounded-lg bg-[#F6F8FA] h-96 p-10">
          <img src={image} className="mx-auto h-full rounded-lg w-full" />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl">{name}</h2>
          <p className="text-2xl text-orange-700">${price} USD</p>
          <p>Rating: {rating}</p>
          <p className="text-green-500">Availability:{qty} left in stock</p>
          <p>Seller email: {email}</p>
          <p className="mt-4">Description</p>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
