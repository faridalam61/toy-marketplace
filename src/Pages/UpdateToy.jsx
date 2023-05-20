import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";

function UpdateToy() {
  useTitle('Update Toy')
  const toy = useLoaderData();
  console.log(toy);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const qty = form.qty.value;
    const description = form.description.value;
    const updatedToy = { price, qty, description };
    console.log(updatedToy);
    fetch(`http://localhost:5000/update/${toy._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          alert("Fail to update");
        }
      });
  };
  return (
    <div>
      <div className="w-full lg:w-2/3 bg-slate-100 mx-auto p-6 lg:p-10 rounded-lg my-6 ">
        <h1 className="text-3xl font-bold mb-6">Update {toy.name}</h1>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <label className="block mb-2">Price</label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                defaultValue={toy.price}
                className="border py-2 px-4 rounded-md w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Qty</label>
              <input
                type="number"
                placeholder="Quantity"
                name="qty"
                defaultValue={toy.qty}
                className="border py-2 px-4 rounded-md w-full"
              />
            </div>
          </div>
          <label className="block mt-3 mb-2">Description</label>
          <textarea
            className="textareaborder py-2 px-4 rounded-md w-full mb-4"
            name="description"
            defaultValue={toy.description}
            placeholder="Description"
          ></textarea>
          <input
            type="submit"
            className="btn hover:bg-[#2EBFED] hover:border-[#2EBFED] border-[#ff6899] bg-[#ff6899] w-full"
            value="Update Toy"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdateToy;
