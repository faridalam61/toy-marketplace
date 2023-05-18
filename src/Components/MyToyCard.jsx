import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Link } from 'react-router-dom';

function MyToyCard({ toys }) {
    const { user } = useContext(AuthContext);
    console.log(toys)
    return (
        <table className="table w-full">

            <thead>
                <tr>
                    <th>SN</th>
                    <th>Products</th>
                    <th>Qty</th>
                    <th className='text-center'>Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    toys.map((toy, idx) => (
                        <tr>
                            <th>
                                <label>
                                   {idx}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user && toy.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{toy.name}</div>
                                        <div className="text-sm opacity-50">{toy.category}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                30
                            </td>
                            <th>
                                <div className='flex gap-4 justify-center'>
                                <Link to={`/update/${toy._id}`} className="btn btn-ghost btn-xs">Edit</Link>
                                <button className="btn btn-ghost btn-xs">View Details</button>
                                </div>
                            </th>
                        </tr>
                    ))
                }

            </tbody>

        </table>
    )
}

export default MyToyCard