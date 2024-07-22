import React, { useEffect } from 'react'   
import { IoArrowBack } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { MdAlternateEmail, MdMale, MdOutlineCall } from "react-icons/md";
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'



export const Profile = () => {

    
    useEffect(() => {
        AOS.init({duration: 1000})
      }, [])
    //   const user = localStorage.getItem('sahayatri-app');
      const userData = JSON.parse(localStorage.getItem('sahayatri-app'));
    
  return (
    <>
        <div className="section w-full h-[100vh] md:h-[50rem] md:pb-14 flex justify-center">
            <div className="wrapper relative top-0 md:top-8  md:rounded-2xl  bg-white w-full md:w-[32rem] drop-shadow-2xl outline outline-1 outline-gray-300 border-b-8 border-primary-color" data-aos="flip-right">
            
            <div className="flex flex-col gap-y-[4.5rem] md:gap-y-[5rem]">
            <div className="top-stripe flex justify-center w-full md:h-28 h-28 bg-secondary-color md:rounded-t-2xl">
                
                <span className="md:hidden block absolute left-6 top-8 back-icon text-white text-4xl">
                <Link to="/"> 
                <IoArrowBack/>
                </Link>
                </span>

                <div className="avt relative top-8 md:top-12 ">
                <div className="h-36 w-36 bg-white rounded-full flex justify-center items-center">
                    <img src={userData.avatarImage}  alt="" className="md:h-32 h-32 outline outline-offset-2 outline-3 outline-primary-color rounded-full"/>
                </div>
                </div>
            </div>

            <div className="headline flex w-full h-20 text-3xl font-bold justify-center pt-2">
                    <p>{userData.username}</p>
            </div>
            </div>

            <div className="details  pl-5  md:px-14 my-5">
            <div className="flex flex-col md:gap-8 gap-3 ">
                {/* ---------Detail Start---------------- */}
                <div className=" flex p-3 items-center">

                    <span className="text-3xl flex justify-center items-center text-primary-color bg-white h-12 w-12 rounded-full mr-6 outline outline-1 outline-gray-300 drop-shadow-2xl transition-all ease-in-out duration-100 hover:bg-primary-color hover:text-white hover:shadow-md hover:shadow-primary-color cursor-pointer">
                        <BiUser/>
                    </span>

                    <div className="flex flex-col p-0">
                        <span className="text-sm font-medium text-gray-300">
                            Name
                        </span>
                        <span className="text-lg font-semibold">
                        {userData.name}
                        </span>
                    </div>
                </div>
                {/* ---------Detail End---------------- */}

                {/* ---------Detail Start---------------- */}
                <div className=" flex p-3 items-center">

                    <span className="text-3xl font-bold flex justify-center items-center text-primary-color bg-white h-12 w-12 rounded-full mr-6 outline outline-1 outline-gray-300 drop-shadow-2xl transition-all ease-in-out duration-100 hover:bg-primary-color hover:text-white hover:shadow-md hover:shadow-primary-color cursor-pointer">
                        <MdMale/>
                    </span>

                    <div className="flex flex-col p-0">
                        <span className="text-sm font-medium text-gray-300">
                            Gender
                        </span>
                        <span className="text-lg font-semibold">
                        {userData.gender}
                        </span>
                    </div>
                </div>
                {/* ---------Detail End---------------- */}

                {/* ---------Detail Start---------------- */}
                <div className=" flex p-3 items-center">

                    <span className="text-3xl flex justify-center items-center text-primary-color bg-white h-12 w-12 rounded-full mr-6 outline outline-1 outline-gray-300 drop-shadow-2xl transition-all ease-in-out duration-100 hover:bg-primary-color hover:text-white hover:shadow-md hover:shadow-primary-color cursor-pointer">
                        <MdAlternateEmail/>
                    </span>

                    <div className="flex flex-col p-0">
                        <span className="text-sm font-medium text-gray-300">
                            Email Id
                        </span>
                        <span className="text-lg font-semibold">
                        {userData.email}
                        </span>
                    </div>
                </div>
                {/* ---------Detail End---------------- */}

                {/* ---------Detail Start---------------- */}
                <div className=" flex p-3 items-center">

                    <span className="text-3xl flex justify-center items-center text-primary-color bg-white h-12 w-12 rounded-full mr-6 outline outline-1 outline-gray-300 drop-shadow-2xl transition-all ease-in-out duration-100 hover:bg-primary-color hover:text-white hover:shadow-md hover:shadow-primary-color  cursor-pointer ">
                        <MdOutlineCall/>
                    </span>

                    <div className="flex flex-col p-0">
                        <span className="text-sm font-medium text-gray-300">
                            Mobile Number
                        </span>
                        <span className="text-lg font-semibold">
                        {userData.phone}
                        </span>
                    </div>
                </div>
                {/* ---------Detail End---------------- */}

                

            </div>
            </div>
            </div>
        </div>
    </>
  )
}
