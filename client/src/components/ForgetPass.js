import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

export const ForgetPass = () => {


  return (
    <>
      <div className="flex justify-center items-center relative top-[3.5rem] mb-96">
        <div className="wrapper relative w-[19rem] h-[26.5rem] z-50 ">
          <div className="form-wrapper sign-up absolute top-0 left-0 flex justify-center items-center w-full h-full bg-white drop-shadow-2xl rounded-xl ">
            <form action="" className="w-[85%]">
              <h2 className="text-[1.85rem] text-[#555] text-center font-bold">
                Forgot Password
              </h2>

            


              <div className="input-group relative w-[17rem]  my-[30px] mx-0">
                <input
                  type="email"
                  required
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
                  type="text"
                  required
                  className="w-full h-[40px] text-[16px] text-[#333] py-0 px-[10px] bg-transparent "
                />
                <label
                  htmlFor=""
                  className="absolute  left-[5px] top-2 text-[14px] text-[#333] py-0 px-1 pointer-events-none transition-all ease-in-out duration-100"
                >
                  Security Question - Favourite Movie?
                </label>
              </div>
              <Link to="#">
              <button
                type="submit"
                className="btn relative top-0 left-0 w-full h-[40px] bg-primary-color text-[16px] text-white font-medium cursor-pointer rounded-md shadow-xl hover:scale-95 active:scale-95"
              >
                Continue
              </button></Link>
              <div className="sign-link text-[14px] text-center my-[25px] mx-0">
                <p className="text-[#333]">
                  I remember my password?{" "}
                  <Link
                    to="/login"
                    className="text-primary-color font-semibold hover:decoration-dashed signIn-Link"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>

          
        </div>
      </div>
    </>
  );
};
