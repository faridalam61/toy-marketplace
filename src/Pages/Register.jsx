import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Register() {
  const { createAccount, setProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const photo = form.photoUrl.value;

    const data = {
      displayName: name,
      photoURL: photo,
    };
    console.log(data);
    createAccount(email, pass)
      .then(() => {
        setProfile(data)
          .then(() => {
            setError("");
            setSuccess("Account Created");
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => {
        setSuccess("");
        setError(error);
      });
  };
  return (
    <div className="card w-96 mx-auto my-20 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl">Create an Account</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered input-secondary w-full mt-4"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered input-secondary w-full mt-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="pass"
            className="input input-bordered input-secondary w-full mt-6"
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            name="photoUrl"
            className="input input-bordered input-secondary w-full mt-6"
            required
          />
          <div className="card-actions w-full">
            <input
              type="submit"
              className="btn mt-6 w-full btn-secondary"
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
