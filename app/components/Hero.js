import React from "react";
import Image from "next/image";
import { Navbar } from ".";
const Hero = () => {
  return (
    <div>
      <div className="hidden sm:block relative">
        <img
          className="w-full"
          src="/banner-image__desktop.png"
          alt="Hero Image"
        />
        {/* content */}
        <div className="absolute bottom-10 left-10 z-10 w-[600px]">
          <div className="flex flex-col py-8 px-4 space-y-4">
            <p className="text-[#373737] text-sm mb-4 font-AKBold">ON SALE NOW</p>
            <h1 className="text-5xl text-white tracking-wide font-MorUltraLight">
              <span className="text-[#373737]">The Super Serium,</span> for your plump, youthful skin.
            </h1>
            <p className="text-white text-base font-AKLight">
              Powered by Retinol, the gentle age-defying serum for everyone.
            </p>
            <button className="bg-[#373737] text-white px-24 py-5 text-center w-fit font-AKMedium">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden relative">
        <Navbar />
        <img
          src="/banner-image__mobile.png"
          className="w-full"
          alt="Hero Image"
        />
        {/* content */}
        <div className="absolute top-20 right-0 z-10">
          <div className="flex flex-col py-8 px-4 space-y-4">
            <p className="text-[#373737] text-xs mb-4 font-AKBold">ON SALE NOW</p>
            <h1 className="text-3xl text-white tracking-wide font-MorUltraLight">
              <span className="text-[#373737]">The Super Serium,</span> for your plump, youthful skin.
            </h1>
            <p className="text-white text-base font-AKLight">
              Powered by Retinol, the gentle age-defying serum for everyone.
            </p>
            <button className="bg-[#373737] text-white px-4 py-5 text-center font-AKMedium">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
