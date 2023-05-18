import React from 'react'
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom';

function ToyCard({toys}) {
    console.log(toys)
    const {_id,image,name,seller,subCategory,price,qty} = toys;
  return (
    <div>
        <div className='bg-slate-100 rounded-lg p-6 mb-2'>
        <img src={image ? image : logo} alt={name} className='mx-auto' />
        </div>
        <h1 className='text-xl text-[#333]'>{name}</h1>
        <p>Seller: {seller}</p>
        <p>Category: {subCategory}</p>
        <p>Stock: {qty}</p>
        <p className='text-bold text-xl text-secondary'>${price}USD</p>
        <Link to={`/product-details/${_id}`} className='btn btn-secondary w-full mt-3'>View Details</Link>
    </div>
  )
}

export default ToyCard