
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
    <div className="bg-gray-300 flex justify-between items-center p-5">
      <Link href={"/"}>
        <span className="text-2xl font-semibold hover:text-blue-600">𝚂𝚕𝚎𝚎𝚙 𝚃𝚛𝚊𝚌𝚔𝚎𝚛</span>
      </Link>
      <div className="flex gap-10 font-semibold items-center text-lg">
        <Link href={"/"}>
          <span className="hover:text-green-500 hover:underline transition-all duration-200">Home</span>
        </Link>
        <Link href={"/about"}>
          <span className="hover:text-green-500 hover:underline transition-all duration-200">About</span>
        </Link>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button className="p-2 rounded-lg bg-white hover:text-green-500 cursor-pointer">Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}

export default Navbar;
