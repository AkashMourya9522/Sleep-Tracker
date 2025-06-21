import { checkUser } from "@/lib/checkUser";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

async function Navbar() {
  const user = await checkUser();
  return (
    <nav className="bg-gray-200 px-4 py-3 sm:px-20">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <p className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Sleep Tracker
          </p>
        </Link>
        <input id="nav-toggle" type="checkbox" className="peer hidden" />
        <label
          htmlFor="nav-toggle"
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
        >
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </label>
       
        <div className="hidden sm:flex gap-5 sm:gap-10 font-semibold items-center sm:text-lg">
          <Link href={"/"}>
            <span className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-clip-text hover:text-transparent transition-all duration-200">
              Home
            </span>
          </Link>
          <Link href={"/about"}>
            <span className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-clip-text hover:text-transparent transition-all duration-200">
              About
            </span>
          </Link>
          <Link href={"/contact"}>
            <span className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-clip-text hover:text-transparent transition-all duration-200">
              Contact Us
            </span>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer ">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      
        <div className="peer-checked:flex hidden absolute top-16 left-0 w-full bg-gray-200 flex-col gap-4 font-semibold items-center text-lg py-4 z-50 sm:hidden transition-all duration-300">
          <Link href={"/"}>
            <span className="block py-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-clip-text hover:text-transparent transition-all duration-200">
              Home
            </span>
          </Link>
          <Link href={"/about"}>
            <span className="block py-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-clip-text hover:text-transparent transition-all duration-200">
              About
            </span>
          </Link>
          <Link href={"/contact"}>
            <span className="block py-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-clip-text hover:text-transparent transition-all duration-200">
              Contact Us
            </span>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer ">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
