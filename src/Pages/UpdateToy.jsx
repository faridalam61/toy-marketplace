import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

function UpdateToy() {
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
    fetch(`https://toy-cars-server-rho.vercel.app/update/${toy._id}`, {
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
      <div className="w-2/3 bg-slate-100 mx-auto p-10 rounded-lg my-6 ">
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
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Qty</label>
              <input
                type="number"
                placeholder="Quantity"
                name="qty"
                defaultValue={toy.qty}
                className="input input-bordered input-secondary w-full"
              />
            </div>
          </div>
          <label className="block mt-3 mb-2">Description</label>
          <textarea
            className="textarea textarea-secondary w-full mb-4"
            name="description"
            defaultValue={toy.description}
            placeholder="Description"
          ></textarea>
          <input
            type="submit"
            className="btn btn-secondary w-full"
            value="Update Toy"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdateToy;
