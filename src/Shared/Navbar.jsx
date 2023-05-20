import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ActiveRoute from "../Routes/ActiveRoute";

function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="bg-base-100 sticky top-0 z-40 px-6">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ActiveRoute to="/">Home</ActiveRoute>
              </li>
              <li>
                <ActiveRoute to="/all-toy">All Toy</ActiveRoute>
              </li>
              {user && (
                <li>
                  <ActiveRoute to="/my-toy">My Toy</ActiveRoute>
                </li>
              )}
              {user && (
                <li>
                  <ActiveRoute to="/add-a-toy">Add A Toy</ActiveRoute>
                </li>
              )}

              <li>
                <ActiveRoute to="/blog">Blogs</ActiveRoute>
              </li>
            </ul>
          </div>
          <Link to="/" className="w-40">
            <img src={logo} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <ActiveRoute to="/">Home</ActiveRoute>
            </li>
            <li>
              <ActiveRoute to="/all-toy">All Toy</ActiveRoute>
            </li>
            {user && (
              <li>
                <ActiveRoute to="/my-toy">My Toy</ActiveRoute>
              </li>
            )}
            {user && (
              <li>
                <ActiveRoute to="/add-a-toy">Add A Toy</ActiveRoute>
              </li>
            )}

            <li>
              <ActiveRoute to="/blog">Blogs</ActiveRoute>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user.photoURL}
                title={user.displayName}
                className="w-12 rounded-full"
              />
              <button
                className="bg-[#ff6899] hover:bg-[#2EBFED] ms-4 text-white py-2 px-3 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-[#ff6899] hover:bg-[#2EBFED] text-white py-2 px-6 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
