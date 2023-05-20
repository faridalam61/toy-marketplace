import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyToyCard from "../Components/MyToyCard";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";

function MyToys() {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch(`https://toy-cars-server-rho.vercel.app/toys/${user.email}`)
      .then((res) => res.json())
      .then((toys) => {
        if (sort == "Highest Price") {
          const dsc = toys.sort((a, b) => b.price - a.price);
          setMyToys(dsc);
          setLoading(false);
          setIsDeleted(false);
        }
        if (sort == "Lowest Price") {
          const asc = toys.sort((a, b) => a.price - b.price);
          setMyToys(asc);
          setLoading(false);
          setIsDeleted(false);
        }
        if (sort == "Default") {
          const defaultA = toys.sort();
          setMyToys(defaultA);
          setLoading(false);
          setIsDeleted(false);
        }

        setMyToys(toys);
        setLoading(false);
        setIsDeleted(false);
      });
  }, [sort, isDeleted, myToys]);

  const handleSort = (e) => {
    const sorted = e.target.value;
    setSort(sorted);
  };
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
              setIsDeleted(true);
            }
          });
      }
    });
  };

  return !loading ? (
    <div className="overflow-x-auto w-full px-4 lg:px-0 lg:w-3/4 mx-auto my-10">
      {myToys.length > 0 ? (
        <div>
          <div className="flex items-center mb-6 justify-between">
            <h2 className="text-2xl font-bold text-[#ff6899]">
              Total Toys: {myToys.length}
            </h2>

            <div className="flex gap-2 items-center">
              <p>Sort by</p>
              <select
                onChange={handleSort}
                className="py-2 px-4 border rounded-md w-44"
              >
                <option>Default</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
              </select>
            </div>
          </div>
          {<MyToyCard toys={myToys} deleted={handleDelete} />}
        </div>
      ) : (
        <h2 className="text-xl text-center">You haven't added any products</h2>
      )}
    </div>
  ) : (
    <h2 className="text-center text-[#ff6899] my-6 text-xl">Loading...</h2>
  );
}

export default MyToys;
