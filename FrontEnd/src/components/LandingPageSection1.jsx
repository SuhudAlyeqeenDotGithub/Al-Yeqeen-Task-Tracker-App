import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import {useEffect } from "react";
import LandingPageHeader from "../components/LandingPageHeader";

const LandingPageSection1 = () => {
  const topHeroTexts = [
    "Stay Focused and Organised with a No-Nonsense Task Tracker That Works for You.",
    "A Simple and Effective Way to Keep Track of Your Daily Tasks Without the Hassle.",
    "Access Your Tasks Anytime, Anywhere - Seamlessly on Your Phone or Computer without Distraction"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setHoverActivated(true);
    }, 1000);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const whiteButtonStyling =
    "flex items-center text-[#02132D] shadow-md border-2 border-[#02132D]  font-bold p-2 rounded-md hover:scale-110 duration-300 transform ease-in";
  const blueButtonStyling =
    "flex items-center bg-[#02132D] shadow-md text-white font-semibold p-2 border border-[#02132D] rounded-md hover:scale-110 duration-300 transform ease-in transform hover:scale-110";
  return (
    <div className="relative w-full lg:h-[95vh] h-[110vh] bg-[url('/taskTrackerInterface.png')]">
      {/* Background Video */}

      {/* Overlay & Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-green-200/95 to-cyan-600 text-[#02132D] z-10">
        {/* Header Section */}

        {/* Hero Section */}

        <div className="mb-10">
          <LandingPageHeader />
        </div>

        <div className="md:w-2/3 h-2/3 flex flex-col gap-y-10 justify-center items-center px-5">
          <div className="flex flex-col justify-center items-center md:min-h-[300px]">
            <Carousel textArray={topHeroTexts} duration={3000} />
            <p className="p-4 font-semibold text-amber-700 md:text-[20px]">Effortless Task Management at Your Fingertips</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-10">
            <div className="flex gap-x-10 justify-center">
              <Link to="/signup">
                <button title="Register" type="button" className={blueButtonStyling}>
                  Get Started for Free
                </button>
              </Link>
              <Link to="/login">
                <button title="Log in" type="button" className={blueButtonStyling}>
                  Log In
                </button>
              </Link>
            </div>

            <div className="flex justify-center">
              <Link to="/login">
                <button title="Your tasks" type="button" className={whiteButtonStyling}>
                  View Your Tasks
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSection1;
