import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../Hooks/useTitle'

function NotFound() {
  useTitle('404 - Not Found')
  return (
    <div className='text-center my-20'>
        <h1 className='text-5xl lg:text-8xl font-bold mb-10'>404</h1>
        <h1 className='text-7xl lg:text-9xl font-bold mb-20'>Not Found</h1>
        <Link to='/' className='bg-[#E80D4A] text-white py-2 px-6 rounded-md'>Return to homepage</Link>
    </div>
  )
}

export default NotFound