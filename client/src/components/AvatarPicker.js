import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utilies/APIRoutes";
import './Avatar.css'

export const AvatarPicker = () => {
  const navigate=useNavigate();
  useEffect(() => {
    const avt = document.querySelectorAll(".avt");

    avt.forEach((avt) => {
        avt.addEventListener("click", () => {
        document.querySelector(".special")?.classList.remove("special");
        avt.classList.add("special");
      });
    });
  });

  const pageReload=() =>{
    window.location.reload();
  }

  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const toastOption = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    rtl: false,
  };

  useEffect( () => {
    if (!localStorage.getItem("sahayatri-app"))
      navigate("/login");
  },[]);

  const setProfilePicture=async()=>{
    if(selectedAvatar===undefined){
      toast.error("Please select an avatar",toastOption);
    }else{
      const user = await JSON.parse(localStorage.getItem("sahayatri-app"));
      const {data}=await axios.post(`${setAvatarRoute}/${user._id}`,{
        image:selectedAvatar,
      });

      if(data.isSet){
        user.isAvatarImageSet=true;
        user.avatarImage=data.image;
        localStorage.setItem("sahayatri-app",JSON.stringify(user));
        // navigator("/");
        navigate("/");
        pageReload();
      }else{
        toast.error("Error setting avatar. Please try again",toastOption)
      }
    }
  };

  return (
    <>
      <section className=" w-full h-[90vh] md:h-[82vh] flex  justify-center z-[50] ">
        <div className="wrapper  relative top-[1.5rem] md:top-20 md:bg-white md:grid md:justify-center md:items-center md:rounded-2xl md:w-[40rem] md:h-[35rem] md:p-6 md:drop-shadow-2xl">
          <div className="title font-bold text-3xl text-center mb-12 tracking-wide">
            <p>Pick an Avatar</p>
          </div>
          <div className="avt-grp grid md:grid-cols-4 grid-cols-3 gap-8 md:gap-10  ">
            <div className="avt avt1 rounded-full bg-gray-300 w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] outline outline-[3px] outline-offset-[3px] outline-transparent  cursor-pointer transition-all ease-in-out  hover:scale-105">
              <img src="avt0.png" alt="" onClick={() => setSelectedAvatar("avt0.png")} />
            </div>
            <div className="avt avt2 rounded-full bg-gray-300 w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] outline outline-[3px] outline-offset-[3px] outline-transparent  cursor-pointer transition-all ease-in-out  hover:scale-105">
              <img src="avt1.png" alt="" onClick={() => setSelectedAvatar("avt1.png")} />
            </div>
            <div className="avt avt3 rounded-full bg-gray-300 w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] outline outline-[3px] outline-offset-[3px] outline-transparent  cursor-pointer transition-all ease-in-out  hover:scale-105">
              <img src="avt2.png" alt="" onClick={() => setSelectedAvatar("avt2.png")} />
            </div>
            <div className="avt avt4 rounded-full bg-gray-300 w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] outline outline-[3px] outline-offset-[3px] outline-transparent  cursor-pointer transition-all ease-in-out  hover:scale-105">
              <img src="avt3.png" alt="" onClick={() => setSelectedAvatar("avt3.png")} />
            </div>
            <div className="avt avt5 rounded-full bg-gray-300 w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] outline outline-[3px] outline-offset-[3px] outline-transparent  cursor-pointer transition-all ease-in-out  hover:scale-105">
              <img src="avt4.png" alt="" onClick={() => setSelectedAvatar("avt4.png")} />
            </div>
            <div className="avt avt6 rounded-full bg-gray-300 w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] outline outline-[3px] outline-offset-[3px] outline-transparent  cursor-pointer transition-all ease-in-out  hover:scale-105">
              <img src="avt5.png" alt="" onClick={() => setSelectedAvatar("avt5.png")} />
            </div>
            <div className="avt avt7 rounded-full bg-gray-300 w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] outline outline-[3px] outline-offset-[3px] outline-transparent  cursor-pointer transition-all ease-in-out  hover:scale-105">
              <img src="avt6.png" alt="" onClick={() => setSelectedAvatar("avt6.png")} />
            </div>
            <div className="avt avt8 rounded-full bg-gray-300 w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] outline outline-[3px] outline-offset-[3px] outline-transparent  cursor-pointer transition-all ease-in-out  hover:scale-105">
              <img src="avt7.png" alt="" onClick={() => setSelectedAvatar("avt7.png")} />
            </div>
            <div className="avt avtExtra md:hidden block rounded-full bg-gray-300 w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] outline outline-[3px] outline-offset-[3px] outline-transparent  cursor-pointer transition-all ease-in-out  hover:scale-105">
              <img src="avt8.png" alt="" onClick={() => setSelectedAvatar("avt8.png")} />
            </div>
          </div>
          <div className="btn mt-10 flex justify-center">
            <span onClick={setProfilePicture} className="inline-block rounded-md w-full py-2 md:w-fit md:px-8 text-center font-semibold text-xl text-white bg-primary-color drop-shadow-xl cursor- transition-all ease-in-out  hover:scale-105 ">
              Continue
            </span>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};
