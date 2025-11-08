import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
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
      username: "",
    });
  };
  return (
    <div className="container p-5">
      <div className="row p-5 text-center">
        <h2 className="pt-5">Open a free demat and trading account online</h2>
        <h5 className="text-muted p-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row p-5 ">
          <div className="col-6">
            <img src="media/images/account_open.svg" alt="img"></img>
          </div>
          <div className="col-6">
            <h3>Signup now</h3>
            <p className="text-muted">Or track your existing application</p>
            <div>
              {/* <label htmlFor="email">Email</label> */}
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                className="row-4 col-7 mb-3"
              />
            </div>
            <div>
              {/* <label htmlFor="username">Username</label> */}
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
                className="row-4 col-7 mb-3"
              />
            </div>
            <div>
              {/* <label htmlFor="password">Password</label> */}
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                className="row-4 col-7 mb-2"
              />
            </div>
            <button style={{margin:"0 auto"}} className='btn btn-primary col-3 p-2 mt-3 fs-5 mb-3'>Signup</button><br></br>
            <p className="text-muted">
              Already have an account? <Link to={"/login"} style={{textDecoration:"none"}}>Login</Link>
            </p>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
