import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import GoogleSignup from "./../components/GoogleSignup";

function Signup() {
  const [formdata, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function updateInfo(e) {
    setFormData({
      ...formdata,
      [e.target.id]: e.target.value,
    });
    // console.log(formdata);
  }
  async function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    };
    let res = await fetch(
      "http://localhost:3000/auth/user/signup",
      requestOptions
    );
    if (res.ok) {
      setLoading(false);
      let data = await res.json();
      if (data.success) {
        toast.success("🦄 User Created Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/signin");
      } else {
        toast.error("Something Went Wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    setLoading(false);
    // console.log(loading);
  }
  return (
    <div className="signup my-8">
      <h1 className="text-4xl font-semibold text-center ">SIGNUP</h1>
      <form className="flex flex-col max-w-lg gap-7 mx-auto my-5 ">
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          className="border rounded-lg p-2 focus:outline-blue-500"
          onChange={updateInfo}
        />
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          className="border rounded-lg p-2 focus:outline-blue-500"
          onChange={updateInfo}
        />
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          className="border rounded-lg p-2 focus:outline-blue-500"
          onChange={updateInfo}
        />
        <input
          type="submit"
          disabled={loading}
          value={loading ? "Loading..." : "Sign Up"}
          className="bg-slate-800 p-3 hover:cursor-pointer rounded-lg text-white text-xl hover:bg-slate-600 disabled:bg-slate-400 transition-all"
          onClick={handleSignUp}
        />
        {/* <GoogleSignup /> */}
        <div className="flex gap-3">
          <p>Already have an account?</p>
          <Link to="/signin" className="text-blue-500">
            Sign In
          </Link>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Signup;
