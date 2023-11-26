import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  signinSuccess,
  signinFailure,
  signinStart,
} from "../redux/user/userSlice.js";

function SignIn() {
  const [formdata, setFormData] = useState({});
  // const [loading, setLoading] = useState(false);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
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
    // setLoading(true);
    dispatch(signinStart());
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    };
    let res = await fetch(
      "http://localhost:3000/auth/user/signinn",
      requestOptions
    );
    if (res.ok) {
      // setLoading(false);
      let data = await res.json();
      if (data.success == false) {
        dispatch(signinFailure());
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        dispatch(signinSuccess(data));
        toast.success("Logged In Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      }
    }
    // setLoading(false);
    dispatch(signinFailure());
    // console.log(loading);
  }
  return (
    <div className="signup my-8">
      <h1 className="text-4xl font-semibold text-center ">SIGN IN </h1>
      <form className="flex flex-col max-w-lg gap-7 mx-auto my-5 ">
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
          value={loading ? "Loading..." : "Sign In"}
          className="bg-slate-800 p-3 hover:cursor-pointer rounded-lg text-white text-xl hover:bg-slate-600 disabled:bg-slate-400 transition-all"
          onClick={handleSignUp}
        />
        <div className="flex gap-3">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
