import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

function AddToy() {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const seller = form.seller.value;
    const category = form.category.value;
    const qty = form.qty.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;
    const email = form.email.value;
    const rating = form.ratings.value;

    const newToy = {
      name,
      seller,
      category,
      price,
      qty,
      image,
      description,
      email,
      rating,
    };
    console.log(newToy);
    fetch("http://localhost:5000/add-toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added successfully!!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Ops!! There is an error. Try again",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="w-2/3 bg-slate-100 mx-auto p-10 rounded-lg my-6 ">
        <h1 className="text-3xl font-bold mb-6">Add A Toy</h1>
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <input
              type="text"
              placeholder="Toy Name"
              name="name"
              className="input input-bordered input-secondary w-full"
            />
            <input
              type="text"
              placeholder="Seller"
              defaultValue={user && user.displayName}
              name="seller"
              className="input input-bordered input-secondary w-full"
            />
            <select
              className="select select-secondary w-full"
              name="category"
              onChange={handleChange}
            >
              <option defaultValue="">Select Category</option>
              <option defaultValue="race-cars">Race Cars</option>
              <option defaultValue="ride-ons">Ride-ons</option>
              <option defaultValue="rc">Remote Controlled</option>
            </select>
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="input input-bordered input-secondary w-full"
            />
            <input
              type="number"
              placeholder="Quantity"
              name="qty"
              className="input input-bordered input-secondary w-full"
            />
            <input
              type="number"
              placeholder="Ratings"
              name="ratings"
              className="input input-bordered input-secondary w-full"
            />
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              className="input input-bordered input-secondary w-full"
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              defaultValue={user && user.email}
              className="input input-bordered input-secondary w-full"
              disabled
            />
          </div>
          <textarea
            className="textarea textarea-secondary w-full my-4"
            name="description"
            placeholder="Description"
          ></textarea>
          <input
            type="submit"
            className="btn btn-secondary w-full"
            value="Add Toy"
          />
        </form>
      </div>
    </div>
  );
}

export default AddToy;
