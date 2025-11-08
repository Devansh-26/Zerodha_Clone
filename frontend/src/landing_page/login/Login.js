import React from 'react';
import { useState } from "react"
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
function Login() {
    const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
    return (
    <div className="container p-5">
     <div className='row p-5 text-center'>
      <h2 className='mb-4'>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            className='row-5 col-5 mb-3'
          />
        </div>
        <div>
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            className='row-5 col-5 mb-3'
          />
        </div>
        <button style={{margin:"0 auto"}} className='btn btn-primary col-2 p-2 mt-3 fs-5 mb-5'>Login</button><br></br>
        <p className='text-muted'>
          Already have an account? <Link to={"/signup"} style={{textDecoration:"none"}}>Signup</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
    </div>   
  );
}

export default Login;