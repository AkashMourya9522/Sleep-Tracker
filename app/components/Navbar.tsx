import { checkUser } from "@/lib/checkUser";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

async function Navbar() {
  const user = await checkUser();
  return (
    <div className="bg-gray-200 flex justify-between items-center p-5 sm:px-20">
      <Link href={"/"}>
        <p className="sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Sleep Tracker
        </p>
      </Link>
      <div className="flex gap-5 sm:gap-10 font-semibold items-center sm:text-lg">
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
  );
}

export default Navbar;
