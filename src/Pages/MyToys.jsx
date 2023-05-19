import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyToyCard from "../Components/MyToyCard";

function MyToys() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch(`https://toy-cars-server-rho.vercel.app/toys/${user.email}`)
      .then((res) => res.json())
      .then((toys) => {
        if (sort == "Descending") {
          const dsc = toys.sort().reverse();
          setMyToys(dsc);
          setLoading(false);
        }
        if (sort == "Aescending") {
          const asc = toys.sort();
          setMyToys(asc);
          setLoading(false);
        }
        setMyToys(toys);
        setLoading(false);
      });
  }, [sort]);

  const handleSort = (e) => {
    const sorted = e.target.value;
    setSort(sorted);
  };
  console.log(myToys);
  return !loading ? (
    <div className="overflow-x-auto w-3/4 mx-auto my-10">
      {myToys.length > 0 ? (
        <div>
          <div className="flex items-center mb-6 justify-between">
            <h2 className="text-2xl font-bold">Total Toys: {myToys.length}</h2>
            <select
              onChange={handleSort}
              className="select select-secondary w-44"
            >
              <option>Sort Porducts</option>
              <option>Descending</option>
              <option>Ascending</option>
            </select>
          </div>
          {<MyToyCard toys={myToys} />}
        </div>
      ) : (
        <h2 className="text-xl text-center">You haven't added any products</h2>
      )}
    </div>
  ) : (
    <h2>Loading...</h2>
  );
}

export default MyToys;
