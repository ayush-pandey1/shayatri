import React, { useEffect } from "react";

import "./Preloader.css";
import { preLoaderAnim } from "../animations";
import { useLocation } from "react-router-dom";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
 const location=useLocation();
//  console.log("llllll",location);
  return (
    <div className={`flex flex-col preloader z-[100] `} style={location.pathname==="/chat"?{display:"none"}:{}} id="stop" >
      <div class="mb-4 text-center text-4xl font-bold text-primary-color md:mb-6 lg:text-6xl inline-block overflow-hidden">
        <span className="word "> <span className="text-white animate-pulse">Sah</span><span className="animate-pulse">Yatri</span></span>
      </div>
      <div className="texts-container">
        <span className="text-primary-color">Share,</span>
        <span className="text-primary-color">Save,</span>
        <span className="text-primary-color">Repeat......</span>
      </div>
    </div>
  );
};

export default Preloader;
