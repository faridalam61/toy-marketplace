import React, { useEffect, useState } from "react";
import ToyCard from "../Components/ToyCard";

function AllToy() {
  const [toys,setToys] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/toys')
    .then(res => res.json())
    .then(result => setToys(result))
  },[])

  const toyLimit = toys.slice(0,8)
  return (

  <div className="container mx-auto my-10">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
    {
      toyLimit.map((toy,idx)=> <ToyCard key={idx} toys={toy}/>)
    }
    </div>
  </div>
  )
}

export default AllToy;
