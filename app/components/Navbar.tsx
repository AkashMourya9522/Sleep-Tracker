"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-gray-300 flex justify-between items-center p-5">
      <Link href={"/"}>
        <span className="text-2xl font-semibold">Sleep Tracker</span>
      </Link>
      <div className="flex gap-20 items-center bg-orange-300">
        <Link href={"/"}>
          <span>Home</span>
        </Link>
        <Link href={"/about"}>
          <span>About</span>
        </Link>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button>Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}

export default Navbar;
