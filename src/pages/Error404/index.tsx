import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import Logo404 from "../../assets/404.svg";

export default React.memo(() => {
  return (
    <div className="min-w-screen min-h-full flex items-center p-5 lg:p-20 overflow-hidden relative flex-grow">
      <div className="flex-1  min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
          <div className="flex flex-row align-center gap-2 mb-10 lg:mb-20">
          <GiKnifeFork size={30} />
          <span className="self-center text-2xl font-semibold">
            Recipeo
          </span>
          </div>
          <div className="mb-10 md:mb-20 text-gray-600 font-light">
            <h1 className="font-black uppercase text-3xl lg:text-5xl text-blue-500 mb-10">
              You seem to be lost!
            </h1>
            <p>The page you're looking for isn't available.</p>
            <p>Try searching again or use the Go Home button below.</p>
          </div>
          <div className="mb-20 md:mb-0">
            <button className="text-lg outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600">
              <i className="mdi mdi-arrow-left mr-2"></i>Go Home
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <img src={Logo404} alt="404" className="w-64 md:w-96 mx-auto" />
         
        </div>
      </div>
    </div>
  );
});
