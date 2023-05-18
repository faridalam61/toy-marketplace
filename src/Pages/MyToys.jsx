import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

function MyToys() {
    const {user} = useContext(AuthContext);
  return (
    <div className="overflow-x-auto w-3/4 mx-auto my-10">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>SN</th>
        <th>Products</th>
        <th>Qty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user && user.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          30
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
    </tbody>
    
  </table>
</div>
  )
}

export default MyToys