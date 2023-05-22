import React from "react";
import Image from "next/image";
import Link from "next/link";
const navbar = () => {
  return (
    <div className="">
      {/* Mobile format */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="flex justify-around sm:hidden pt-4">
            <Image
              src="/Group.svg"
              alt="Menu Icon"
              width={16}
              height={16}
              priority
            />
            <Image
              src="/logo__black.svg"
              alt="alpaH Logo"
              width={125}
              height={26}
              priority
            />
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="6"
                width="20"
                height="17"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M15 5C15 2.79086 13.2091 1 11 1C8.79086 1 7 2.79086 7 5"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Desktop format */}
      <div className="bg-white hidden sm:block py-4">
        <div className="flex justify-around items-center">
          <Image
            src="/logo__white.svg"
            alt="alpaH Logo"
            width={125}
            height={26}
            priority
          />
          <div className="flex space-x-10">
            <div className="grow items-center text-center space-x-4 text-sm font-AKRegular">
              <Link href="/" className="text-[#231F16] hover:text-[#BB8934]">
                Shop
              </Link>
              <Link href="/" className="text-[#231F16] hover:text-[#BB8934]">
                3-Step Approach
              </Link>
              <Link href="/" className="text-[#231F16] hover:text-[#BB8934]">
                Find Your Routine
              </Link>
              <Link href="/" className="text-[#231F16] hover:text-[#BB8934]">
                Book a consultant
              </Link>
              <Link href="/" className="text-[#231F16] hover:text-[#BB8934]">
                Our Story
              </Link>
              <Link href="/" className="text-[#231F16] hover:text-[#BB8934]">
                The Journal
              </Link>
            </div>

            <div className="flex items-center grow-0 space-x-8">
              <Link href="/">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-[#373737] hover:stroke-[#BB8934]"
                >
                  <path
                    d="M19 21V18C19 15.7909 17.2091 14 15 14H5C2.79086 14 1 15.7909 1 18V21"
                    strokeWidth="2"
                  />
                  <circle cx="10" cy="6" r="5" strokeWidth="2" />
                </svg>
              </Link>
              <Link href="/">
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-[#373737] hover:stroke-[#BB8934]"
                >
                  <rect x="1" y="6" width="20" height="17" strokeWidth="2" />
                  <path
                    d="M15 5C15 2.79086 13.2091 1 11 1C8.79086 1 7 2.79086 7 5"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 stroke-[#373737] hover:stroke-[#BB8934]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
