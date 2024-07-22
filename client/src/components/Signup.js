
import "./Signup.css";


import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import { signUpRoute } from "../utilies/APIRoutes";
import { signUpRoute }from "../utilies/APIRoutes";

export const Signup = () => {
  const navigate=useNavigate();
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const signUpLink = document.querySelector(".signUp-Link");
    const signInLink = document.querySelector(".signIn-Link");

    signUpLink.addEventListener("click", () => {
      wrapper.classList.add("animate-signIn");
      wrapper.classList.remove("animate-signUp");
    });

    signInLink.addEventListener("click", () => {
      wrapper.classList.add("animate-signUp");
      wrapper.classList.remove("animate-signIn");
    });
  });
  // useEffect(() => {
  //   if (localStorage.getItem("sahayatri-app")) {
  //     navigate("/");
  //   }
  // }, []);
 
  //sign up
   // SIGNUP FUNCTIONALITY
   const toastOption = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    rtl: false,
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    phone:"",
    gender:"",
  });
  const handleContinueClick = () => {
    // Your code to handle the button click, e.g., animations or navigation
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleValidation = () => {
    const { username, email, password, name,gender,phone} = values;
    if (username.length < 1) {
      toast.error("Username is required.", toastOption);
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be equal or greater 3 character.",
        toastOption
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOption);
      return false;
    } else if (password.length < 1) {
      toast.error("Paasword is required.", toastOption);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater 8 character.",
        toastOption
      );
      return false;
    } else if (name.length < 1) {
      toast.error("Full name is required.", toastOption);
      return false;
    }else if (name.length < 2) {
      toast.error("Full name should be equal or greater 3 character. ", toastOption);
      return false;
    }else if (name.length < 1) {
      toast.error("Security question is required.", toastOption);
      return false;
    }
  else if (phone.length !== 10) {
      toast.error("Phone number should be 10 digits", toastOption);
      return false;
    }
    else if(gender===""){
      toast.error("Gender is required", toastOption);
      return false;
    }
    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (handleValidation()) {
      try {
        const { username, email, password, name, phone, gender } = values;
        const { data } = await axios.post(signUpRoute, {
          username,
          email,
          password,
          name,
          phone,
          gender
        });
  
        if (data.status === false) {
          toast.error(data.msg, toastOption);
        } else if (data.status === true) {
          localStorage.setItem("sahayatri-app", JSON.stringify(data.user));
          navigate("/avatar");
          toast.success("Successful", toastOption);
        }
      } catch (error) {
        if (error.response) {
          // The request was made, but the server responded with an error status code
          console.error('Server returned an error:', error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error('No response received from the server:', error.request);
        } else {
          // Something else went wrong
          console.error('Error during the request:', error.message);
        }
      }
    }
  };
  

  return (
    <>
      <div className="flex justify-center items-center relative top-[3.5rem] mb-96">
        <div className="wrapper relative w-[19rem] h-[26.5rem] z-50 ">
          <div className="form-wrapper sign-up absolute top-0 left-0 flex justify-center items-center w-full h-full bg-white drop-shadow-2xl rounded-xl rotate-[7deg]">
            <form action="" 
            onSubmit={(event) => handleSubmit(event)} 
            className="w-[85%]">
              <h2 className="text-[1.85rem] text-[#555] text-center font-bold">
                Personal Details
              </h2>

              <div className="input-group relative w-[17rem] my-[20px] mx-0">
                <input
                  type="text"
                  // required
                  name="name"
                  onChange={(e) => handleChange(e)}
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent"
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[15px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  Full Name
                </label>
              </div>

              <div className="input-group relative w-[17rem] my-[20px] mx-0">
                <input
                  type="number"
                  // required
                  name="phone"
                  onChange={(e) => handleChange(e)}
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent"
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[15px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  Mobile No.
                </label>
              </div>

              <div className="input-group relative w-[17rem] my-[20px] mx-0">
                
                <div className="grid w-[17rem] grid-cols-2 gap-2 rounded-md outline outline-1 outline-gray-300 p-1">
                
                  <div>
                  
                  <input
                      type="radio"
                      name="gender"
                      id="1"
                      value="Male"
                      className="peer hidden"
                      // checked
                      // checked={values.gender === 'female'}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="1"
                      className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary-color peer-checked:font-bold peer-checked:text-white"
                    >
                      Male
                    </label>
                  </div>

                  <div>
                  <input
                      type="radio"
                      name="gender"
                      id="2"
                      value="Female"
                      className="peer hidden"
                      // checked={values.gender === 'female'}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="2"
                      className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary-color peer-checked:font-bold peer-checked:text-white"
                    >
                      Female
                    </label>
                  </div>

                  
                </div>
              </div>
              {/* <Link to="/avatar"> */}
                <button
                  type="submit"
                  className="btn relative top-0 left-0 w-full h-[40px] bg-primary-color text-[16px] text-white font-medium cursor-pointer rounded-md shadow-xl hover:scale-95 active:scale-95"
                >
                  Sign Up
                </button>
              {/* </Link> */}

              <div className="sign-link text-[14px] text-center my-[25px] mx-0">
                <p className="text-[#333]">
                  Made an Error?{" "}
                  <Link
                    to=""
                    className="text-primary-color font-semibold hover:decoration-dashed signIn-Link"
                  >
                    Go Back
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* ---------------SignUp------------------ */}

          <div className="form-wrapper sign-in absolute top-0 left-0 flex justify-center items-center w-full h-full bg-white drop-shadow-2xl rounded-xl">
            <form action=""  className="w-[85%]">
              <h2 className="text-[1.85rem] text-[#555] text-center font-bold">
                Sign Up
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

              <div className="input-group relative w-[17rem] my-[20px] mx-0">
                <input
                  type="email"
                  // required
                  name="email"
                  onChange={(e) => handleChange(e)}
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent  email"
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[15px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  Email
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

              <button
               type="button"
               className="btn relative top-0 left-0 w-full h-[40px] bg-primary-color text-[16px] text-white font-medium cursor-pointer rounded-md shadow-xl hover:scale-95 active:scale-95 signUp-Link sign-link"
                onClick={handleContinueClick}
              >
               Continue
              </button>

              <div className="sign-link text-[14px] text-center my-[25px] mx-0">
                <p className="text-[#333]">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary-color font-semibold hover:decoration-dashed signIn-Link"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
              {/* <div className=" text-[14px] text-center my-[25px] mx-0">
                <p className="text-[#333]">
                  Don't have an account?{" "}
                  <Link
                    to="#"
                    className="text-primary-color font-semibold hover:decoration-dashed "
                  >
                    Sign Up
                  </Link>
                </p>
              </div> */}
            </form>
          
          </div>
          < ToastContainer />
        </div>
        
      </div>
    </>
  );
};
