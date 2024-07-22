import React from "react";
import "./Loader.css";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Loader = () => {
    const [text1] = useTypewriter({
        words : ['Searching nearby users...', 'Waking Up Api...' , 'It may take few seconds...'],
        loop : {},
        typeSpeed : 70,
        deleteSpeed : 70,
        delaySpeed : 1000,
      });
  return (
    <>
      <div className=" w-full h-[85vh] md:h-[80vh] mt-[px] flex  justify-center z-[49] relative top-16 md:top-[10rem]">
        <div className="flex loader relative justify-center items-center z-[49]">
          <div className="bg-primary-color h-16 w-16 rounded-full text-white flex justify-center items-center z-[49] text-3xl drop-shadow-2xl">
            <div className="animate-pulse">
              <FaMagnifyingGlassLocation />
            </div>
          </div>
        </div>
        <div className="absolute top-[22rem] md:top-[60%] font-semibold text-2xl md:text-3xl text-primary-color">
            <p>{text1}<Cursor cursorStyle="_" /></p>
            
        </div>
      </div>
    </>
  );
};
