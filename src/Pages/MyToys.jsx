import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import MyToyCard from '../Components/MyToyCard';

function MyToys() {
    const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
    const [myToys,setMyToys] = useState([]);
  
    useEffect(()=>{
      fetch(`http://localhost:5000/toys/${user.email}`)
    .then(res => res.json())
    .then(toys => {
      setMyToys(toys)
      setLoading(false)
    });
    },[]);

  return (
   !loading ? 
    <div className="overflow-x-auto w-3/4 mx-auto my-10">
       {myToys.length > 0 ? (<div>
        
      <h2 className='text-2xl font-bold mb-4'>Total Toys: {myToys.length}</h2>
  {
    <MyToyCard toys={myToys}/>
  }
        </div>) : <h2 className='text-xl text-center'>You haven't added any products</h2>}
</div>
: <h2>Loading...</h2>
  )
}

export default MyToys