import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

export const Hero = () => {
  
  const [text1] = useTypewriter({
    words: ["Share...", "Save...", "Repeat..."],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1500,
  });
  return (
    <>
      <section className="bg-g w-full md:h-[77vh] mt-[px] flex justify-center">
        <div className="bg-g lg:w-[83.8rem] md:w-[63.6rem] w-[47.5rem]  h-full  px-0 z-[2]">
          <div className="flex md:flex-row flex-col-reverse items-center h-full lg:p-0 md:justify-between ">
            {/* ---------------------------------- */}
            <div className="flex flex-col gap-y-8 m-8 md:m-0">
              <div className="headline">
                <div className="text-gray-400 font-medium text-xl items-center mb-4">
                  <p>• Made In India</p>
                </div>
                <p className="flex  text-3xl font-extrabold md:text-4xl xl:text-6xl text-secondary-color">
                  Together, We Go Farther
                </p>

                <div className="flex font-extrabold text-primary-color md:text-5xl text-3xl">
                  <span className="multi-type">{text1}</span>
                  <span className="">
                    <Cursor cursorStyle="|" />
                  </span>
                </div>
              </div>

              <div className="m md:text-3xl text-2xl tracking-wide font-medium font text-slate-500">
                <span>Efficient, Eco-Friendly & </span>
                <br />
                <span>Economical Travel Solution.</span>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  to="/booking"
                  className="cursor-pointer rounded-full font-medium bg-primary-color text-white font-rubik xl:text-lg text-sm  xl:px-9  px-5 xl:py-4 py-2"
                >
                  <span className="flex-col items-center mr-3">Find Rides</span>
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    style={{ color: "#ffffff" }}
                    className="text-xl font-normal opacity-90"
                  />
                </Link>
                <div class="flex -space-x-4">
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full dark:border-primary-color"
                    src="avt1.png"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full dark:border-primary-color"
                    src="avt2.png"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full dark:border-primary-color"
                    src="avt3.png"
                    alt=""
                  />
                  <a
                    class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-500 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-300"
                    href="#"
                  >
                    +99
                  </a>
                </div>
              </div>
            </div>
            {/* ---------------Split-------------- */}
            <div className="p-0 flex md:flex items-center h-full justify-between">
              {/* <div className="relative top-[75px] -right-[120px] md:block hidden z-40 w-[100px] bg-none p-0 m-0 animate-topdown">
                <img src="hands.png" alt="" className=" -rotate-12" />
                </div> */}

              <img
                src="Hero.jpg"
                alt=""
                className="p-0 md:w-[35rem] w-[23.8rem] saturate-[3] md:mix-blend-darken mix-blend-darken"
              />

              {/* <div className="relative right-[0px] -top-[5px] z-40 md:block hidden w-[90px] bg-none p-0 m-0 animate-topdown">
                <img src="globe.png" alt="" className="relative right-[170px] -top-[100px] z-40 md:inline-block hidden w-[90px] bg-none p-0 m-0 animate-topdown rotate-12" />
                
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-secondary-color w-full h-[77vh] z-[2]"></section> */}
    </>
  );
};
