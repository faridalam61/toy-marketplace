import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";

function AddToy() {
  useTitle('Add Toy')
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
      <div className="w-full px-4 lg:px-8 lg:w-2/3 bg-slate-100 mx-auto p-10 rounded-lg my-6 ">
        <h1 className="text-3xl font-bold text-[#ff6899] mb-6">Add A Toy</h1>
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <input
              type="text"
              placeholder="Toy Name"
              name="name"
              className="border py-2 px-4 rounded-md w-full"
              required
            />
            <input
              type="text"
              placeholder="Seller"
              defaultValue={user && user.displayName}
              name="seller"
              className="border py-2 px-4 rounded-md w-full"
              required
            />
            <select
              className="border py-2 px-4 rounded-md w-full"
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
              className="border py-2 px-4 rounded-md w-full"
              required
            />
            <input
              type="number"
              placeholder="Quantity"
              name="qty"
              className="border py-2 px-4 rounded-md w-full"
              required
            />
            <input
              type="number"
              placeholder="Ratings"
              name="ratings"
              className="border py-2 px-4 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              className="border py-2 px-4 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              defaultValue={user && user.email}
              className="border py-2 px-4 rounded-md w-full"
              disabled
            />
          </div>
          <textarea
            className="textarea border py-2 px-4 rounded-md w-full my-4"
            name="description"
            placeholder="Description"
          ></textarea>
          <input
            type="submit"
            className="btn hover:bg-[#2EBFED] hover:border-[#2EBFED] border-[#ff6899] bg-[#ff6899] w-full"
            value="Add Toy"
          />
        </form>
      </div>
    </div>
  );
}

export default AddToy;
