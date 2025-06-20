import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <div className="p-10 py-20 sm:py-15 ">
        <p className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
          About Sleep Tracker
        </p>
        <p className="text-center text-lg sm:text-xl mt-5 font-semibold">
          Your ultimate companion for tracking sleep and improving your health.
        </p>
      </div>
      <div className="p-10 py-20 sm:py-15 ">
        <p className="text-2xl sm:text-3xl font-semibold text-center">
          Our Mission
        </p>
        <p className="mt-10 text-gray-500 sm:mx-auto text-center sm:w-lg">
          At Sleep Tracker, we are dedicated to helping you understand your
          sleep patterns and improve your overall well-being. Our app provides a
          simple and intuitive way to log your sleep, analyze your habits, and
          make informed decisions about your health.
        </p>
      </div>
      <div className="bg-gray-100 p-10 py-20 sm:py-15">
        <p className="text-2xl sm:text-3xl font-semibold text-center">
          Why Choose Sleep Tracker?
        </p>
        <div className="flex flex-col gap-10 sm:flex-row mt-10 justify-center">
          <div className="bg-white rounded-lg p-5 shadow-md sm:w-70">
            <p className="text-xl font-semibold">Comprehensive Tracking</p>
            <p className="mt-2 text-gray-500">
              Monitor your sleep patterns and identify areas for improvement.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-md sm:w-70">
            <p className="text-xl font-semibold">Personalized Insights</p>
            <p className="mt-2 text-gray-500">
              Receive tailored recommendations to enhance your sleep quality.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-md sm:w-70">
            <p className="text-xl font-semibold">User Friendly Design</p>
            <p className="mt-2 text-gray-500">
              Enjoy an intuitive and seamless experience across all devices.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 py-20 sm:py-15 ">
        <p className="text-2xl sm:text-3xl font-semibold text-center">
          Our Story
        </p>
        <p className="mt-10 text-gray-500 sm:mx-auto text-center sm:w-lg">
          SleepTracker was created to address the growing need for better sleep
          management tools. Our team of sleep experts and technologists
          developed a platform that combines cutting-edge technology with
          actionable insights. Since our launch, we have helped countless users
          achieve better sleep and improve their overall health.
        </p>
      </div>
      <div className="p-10 py-20 sm:py-15 bg-gray-100">
        <p className="text-2xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text p-3">
          Ready to Sleep Better?
        </p>
        <p className="mt-10 text-gray-500 sm:mx-auto text-center sm:w-lg">
          Join SleepTracker today and take the first step towards better sleep
          and a healthier life.
        </p>
        <div className="flex justify-center items-center my-10">
          <Link href={'/sign-in'}>
        <button className="align-middle bg-gradient-to-r from-blue-500 to-purple-500 p-3 text-white font-semibold rounded-lg text-lg hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-200">
          Get Started
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
