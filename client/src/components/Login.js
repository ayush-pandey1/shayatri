import React, { useEffect, useState } from "react";
// import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute} from "../utilies/APIRoutes";

export const Login = () => {
  const navigate=useNavigate();
  const toastOption = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    rtl: false,
  };
  const [values, setValues] = useState({ username: " ", password: " " });
  const pageReload=() =>{
    window.location.reload();
  }
  useEffect(() => {
    if (localStorage.getItem("sahayatri-app")) {
      navigate("/");
    }
  }, [])
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const validateForm = () => {
    const { username, password } = values;
    // console.log(password1.length);
    if (username <1) {
      toast.error("Username and Password is required.", toastOption);
      return false;
    } else if (password <1) {
      toast.error("Username and Password is required.", toastOption);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOption);
      }
      if (data.status === true) {
        // toast.success("Successful",toastOption);
        localStorage.setItem("sahayatri-app", JSON.stringify(data.user));
        // 
        navigate("/");
        pageReload();
        
        // toast.success("Successful",toastOption);
      }
    }
  };

  


  return (
    <>
    <div className="flex justify-center items-center relative top-[3.5rem] mb-96">
        <div className="wrapper relative w-[19rem] h-[26.5rem] z-50 ">
      <div className="form-wrapper sign-in absolute top-0 left-0 flex justify-center items-center w-full h-full bg-white drop-shadow-2xl rounded-xl">
        <form action="" onSubmit={(event) => handleSubmit(event)} className="w-[85%]">
          <h2 className="text-[1.85rem] text-[#555] text-center font-bold">
            Login
          </h2>

          <div className="input-group relative w-[17rem] my-[30px] mx-0">
            <input
              type="text"
              // required
              name="username"
              onChange={(e) => handleChange(e)}
              className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent  "
            />
            <label
              htmlFor=""
              className="absolute  left-[5px] top-2 text-[15px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
            >
              Username
            </label>
          </div>

          <div className="input-group relative w-[17rem] my-[30px] mx-0">
            <input
              type="password"
              // required
              name="password"
              onChange={(e) => handleChange(e)}
              className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent "
            />
            <label
              htmlFor=""
              className="absolute  left-[5px] top-2 text-[15px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
            >
              Password
            </label>
          </div>

          <div className="forget-pass -mt-[15px] mr-0 mb-[15px]">
            <Link to="/forget" className="text-[#333] text-[14px]">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="btn relative top-0 left-0 w-full h-[40px] bg-primary-color text-[16px] text-white font-medium cursor-pointer rounded-md shadow-xl hover:scale-95 active:scale-95"
          >
            Login
          </button>
          <div className="sign-link text-[14px] text-center my-[25px] mx-0">
            <p className="text-[#333]">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-primary-color font-semibold hover:decoration-dashed signUp-Link"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
      </div>
      </div>
      
    </>
  );
};
