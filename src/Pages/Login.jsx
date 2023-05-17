import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Login() {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    signInUser(email, pass)
      .then(() => {
        setError("");
        setSuccess("Login successfull");
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };
  return (
    <div className="card w-96 mx-auto my-16 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered input-primary w-full mt-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="pass"
            className="input input-bordered input-primary w-full mt-6"
            required
          />
          <div className="card-actions w-full">
            <input
              type="submit"
              className="btn mt-6 w-full btn-primary"
              value="Login"
            />
          </div>
        </form>
        <p className="text-red-500">{error}</p>
        <p className="text-green-500">{success}</p>
        <p className="text-center">-Or Login with-</p>
        <div className="flex gap-4 justify-between">
          <button className="flex gap-2 border  border-[#570DF8]  py-1 px-3 hover:bg-primary hover:text-white text-sm items-center rounded-sm">
            <FaGithub /> Github
          </button>
          <button className="flex gap-2 border  border-[#570DF8]  py-1 px-3 hover:bg-primary hover:text-white text-sm items-center rounded-sm">
            <FaGoogle /> Google
          </button>
          <button className="flex gap-2 border  border-[#570DF8]  py-1 px-3 hover:bg-primary hover:text-white text-sm items-center rounded-sm">
            <FaFacebook /> Facebo
          </button>
        </div>
        <p className="text-sm mt-2">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
