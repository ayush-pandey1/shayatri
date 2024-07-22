import React, { useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import "./nav.css";
import { Link, useLocation ,useNavigate} from "react-router-dom";
import { logoutRoute } from "../utilies/APIRoutes";
import axios from 'axios';

export const Navbar = () => {
  const navigate=useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("sahayatri-app"));
  

// const handleLogout=async(req,res,next)=>{
//   try {
//     // await axios.post(logoutRoute);
//     localStorage.removeItem("sahayatri-app");
//     navigate("/");
//   } catch (error) {
//     next(error);
//   }
// }

  useEffect(() => {
    const list = document.querySelectorAll(".list");

    list.forEach((list) => {
      list.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        list.classList.add("active");
      });
    });
  });
  const pageReload=() =>{
    window.location.reload();
  }
  const handleLogout = async () => {
    const user = await JSON.parse(localStorage.getItem("sahayatri-app"));
    const userId=user._id;
    await axios.post(logoutRoute, {
      userId,
    })
    .catch(error => {
      console.error('Error :', error);
    });
    pageReload();
    localStorage.removeItem("sahayatri-app");
    navigate("/");
  }
  const userData = JSON.parse(localStorage.getItem('sahayatri-app'));
  const location = useLocation();

    // Check if the current route is "/chat"
    const isProfilePage = location.pathname === '/profile';
    // const avatar={userData.avatarImage};
  return (
    <>
      {/* --------------------Top Navbar (Mobile)------------------------ */}
      {!isProfilePage && (
      <div className="md:hidden md:fixed z-50 w-full h-full flex justify-center sticky top-0">
        <div className="md:hidden md:fixed shadow-inner bg-secondary-color w-full h-14 md:h-20 flex justify-between items-center lg:max-w-5xl md:gap-3 p-4 md:rounded-full drop-shadow-2xl z-[2]">

          <div className=" rounded-full ml-1 mr-9 ">
            {!loggedIn?
            <img src="avt0.png" alt="" className="h-[2.2rem] outline outline-1 outline-offset-2 outline-primary-color rounded-full " />
            :<img src={userData.avatarImage} alt="" className="h-[2.2rem] outline outline-1 outline-offset-2 outline-primary-color rounded-full " />}
            </div>

          <div className="flex md:hidden items-center px-2 gap-1">
            
            <Link to="/" className="text-3xl font-bold text-accent">
            Sah<span className="text-primary-color ">Yatri </span>
            </Link>
          </div>
          <div>
            {!loggedIn?<>
            <Link
              to="/login"
              className="md:hidden block bg-primary-color rounded-md text-accent font-semibold cursor-pointer px-4 py-[0.35rem] transition ease-in duration-200 hover:-translate-y-1 "
            >
              Login
            </Link>
            </>:
            <>
            <Link
              to="/login"
              onClick={handleLogout}
              className="md:hidden block bg-primary-color rounded-md text-accent font-semibold cursor-pointer px-4 py-[0.35rem] transition ease-in duration-200 hover:-translate-y-1 "
            >
              Logout
            </Link>
            </>
}
          </div>
        </div>
      </div>
      )}
      {/* --------------------------------------------------------------- */}

      <div className="fixed bottom-0 w-full md:sticky md:top-0 z-[51] flex justify-center bg-secondary-color drop-shadow-2xl Fade">
        <div className="w-full md:w-[84rem] h-16 md:h-20 flex justify-between items-center ">
          <div className="md:flex items-center px-2 gap-1 hidden ">
            <Link to="/" className="text-3xl font-bold text-white">
              Saha<span className="text-primary-color ">Yatri</span>
            </Link>
          </div>

          {/*---------------Bottom Navbar (mobile) ---------------*/}
          <ul className="flex md:hidden w-full mobile ">
            <li className="relative w-[33.3%] h-[60px] z-50 list active ">
              <Link
                to="/"
                className="relative flex justify-center items-center h-full w-full"
              >
                <span className="relative flex w-[55px] h-[55px] text-center items-center justify-center rounded-full text-2xl icon transition-all duration-200 text-accent ">
                  <IoHomeOutline />
                </span>
              </Link>
            </li>

            <li className="relative w-[33.3%] h-[60px] z-50 list">
              <Link
                to="#"
                className="relative flex justify-center items-center h-full w-full"
              >
                <span className="relative flex w-[55px] h-[55px] text-center items-center justify-center rounded-full text-2xl icon transition-all ease-in-out duration-200 text-accent">
                  <IoMdNotificationsOutline className="svg"/>
                </span>
              </Link>
            </li>

            <li className="relative w-[33.3%] h-[60px] z-20 list transition-all ease-in-out duration-100">
              <Link
                to="/profile"
                className="relative flex justify-center items-center h-full w-full "
              >
                <span className="relative flex w-[55px] h-[55px] text-center items-center justify-center rounded-full text-2xl transition-all duration-200 icon text-accent">
                  <HiOutlineUser />
                </span>
              </Link>
            </li>
          </ul>

          {/*---------------------------------------------------*/}
            {/* <div className="flex justify-between space-x-16"> */}
          <div
            name="menu"
            id="menu-bar"
            className="md:flex md:flex-row relative py-2 items-center text-accent bg-transparent w-fit gap-4 lg:gap-9 md:right-0 md:top-0 font-medium transition-all ease-in px-2 hidden"
          >
            <Link
              to="/"
              className="hover:text-primary-color transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/chat"
              className="hover:text-primary-color transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
            >
              Chat
            </Link>
            {loggedIn?<>
            <Link
              to="/profile"
              className="hover:text-primary-color transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
            >
              Profile
            </Link>
            </>:<>
            <Link
              to="/login"
              className="hover:text-primary-color transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
            >
              Profile
            </Link>
            </>}
            <Link
              to="/contact"
              className="hover:text-primary-color transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
            >
              Contact Us
            </Link>
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            {!loggedIn?
            <>
            <Link
              to="/signup"
              className="hidden md:flex font-medium mr-auto ml-auto transition-all ease-in hover:-translate-y-1 hover:text-primary-color text-accent"
            >
              Sign-Up
            </Link>
            <Link
              to="/login"
              // onClick={handleLogout}
              className="hidden md:block p-3 bg-primary-color rounded-lg text-secondary-color font-bold cursor-pointer mr-auto px-6 py-2 transition ease-in duration-200 hover:-translate-y-1 hover:text-white">
              Login
            </Link>
            </>:
            <>
            <Link
            to="/login"
            onClick={handleLogout}
            className="hidden md:block p-3 bg-primary-color rounded-lg text-secondary-color font-bold cursor-pointer mr-auto px-6 py-2 transition ease-in duration-200 hover:-translate-y-1 hover:text-white">
            Logout
          </Link>
          </>

}
            {/* <Link
            to="/"
            className="hover:text-gray-400 transition-all ease-in hover:-translate-y-1 py-2 md:py-0 cursor-pointer"
          >
            Contact
          </Link> */}
          </div>

          {/* <div className=" transition-all ease-in flex items-center  md:gap-2 justify-between">
            
            
          </div> */}
          </div>
        {/* </div> */}
      </div>
    </>
  );
};
