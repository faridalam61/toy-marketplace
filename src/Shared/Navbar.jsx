import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";
import { AuthContext } from "../AuthProvider/AuthProvider";

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all-toy">All Toy</Link>
              </li>
              {user && (
                <li>
                  <Link to="/my-toy">My Toy</Link>
                </li>
              )}
              {user && (
                <li>
                  <Link to="/add-a-toy">Add A Toy</Link>
                </li>
              )}

              <li>
                <Link to="/blog">Blogs</Link>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-toy">All Toy</Link>
            </li>
            {user && (
              <li>
                <Link to="/my-toy">My Toy</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/add-a-toy">Add A Toy</Link>
              </li>
            )}

            <li>
              <Link to="/blog">Blogs</Link>
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
                className="bg-[#E80D4A] ms-4 text-white py-2 px-3 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-[#F000B8] text-white py-2 px-6 rounded-md"
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
