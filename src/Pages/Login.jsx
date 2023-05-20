import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";

function Login() {
  useTitle('Login')
  const { signInUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    signInUser(email, pass)
      .then(() => {
        setError("");
        setSuccess("Login successfull");
        navigate(from);
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };

  const hadnleGoogleLogin = () => {
    googleLogin()
      .then(() => navigate(from))
      .catch((error) => setError(error.message));
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
          <div className="card-actions w-full">
            <input
              type="submit"
              className="btn mt-6 btn-secondary w-full "
              value="Login"
            />
          </div>
        </form>
        <p className="text-red-500">{error}</p>
        <p className="text-green-500">{success}</p>
        <p className="text-sm mt-2">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        <p className="text-center">--Or with Google--</p>

        <button
          onClick={hadnleGoogleLogin}
          className="flex gap-2 border  border-[#F000B8]  p-3 hover:bg-[#F000B8] hover:text-white text-sm items-center rounded-md"
        >
          <FaGoogle />
          Login With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
