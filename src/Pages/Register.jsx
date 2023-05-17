import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Register() {
  const { createAccount } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    createAccount(email, pass)
      .then(() => {
        setError("");
        setSuccess("Account Created");
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };
  return (
    <div className="card w-96 mx-auto my-20 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl">Create an Account</h2>
        <form onSubmit={handleRegister}>
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
              value="Sign Up"
            />
          </div>
        </form>
        <p className="text-red-500">{error}</p>
        <p className="text-green-500">{success}</p>
        <p className="text-sm mt-2">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
