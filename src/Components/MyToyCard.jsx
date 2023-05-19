import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegEdit, FaRegEye, FaArchive } from "react-icons/fa";
import Swal from "sweetalert2";

function MyToyCard({ toys }) {
  const { user } = useContext(AuthContext);
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-cars-server-rho.vercel.app/delete/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>SN</th>
          <th>Products</th>
          <th>Price</th>
          <th>Qty</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {toys.map((toy, idx) => (
          <tr key={idx}>
            <th>
              <label>{idx + 1}</label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={user && toy.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{toy.name}</div>
                  <div className="text-sm opacity-50">{toy.category}</div>
                </div>
              </div>
            </td>
            <td>${toy.price} USD</td>
            <td>{toy.qty}</td>
            <th>
              <div className="flex gap-2 justify-center">
                <Link
                  to={`/update/${toy._id}`}
                  className="btn btn-ghost btn-xs gap-1 flex"
                >
                  <FaRegEdit /> Edit
                </Link>
                <Link
                  to={`/product-details/${toy._id}`}
                  className="btn btn-ghost btn-xs flex gap-1"
                >
                  <FaRegEye /> View
                </Link>
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="btn btn-ghost btn-xs flex gap-1"
                >
                  <FaArchive />
                  Delete
                </button>
              </div>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyToyCard;
