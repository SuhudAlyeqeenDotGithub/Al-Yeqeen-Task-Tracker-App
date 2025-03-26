import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import LandingPageHeader from "../components/LandingPageHeader";

const LandingPageSection1 = () => {
  const topHeroTexts = [
    "Stay Focused and Organised with a No-Nonsense Task Tracker That Works for You.",
    "A Simple and Effective Way to Keep Track of Your Daily Tasks Without the Hassle."
  ];

  const [hoverActivated, setHoverActivated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHoverActivated(true);
    }, 1000);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const whiteButtonStyling =
    "flex items-center shadow-md text-[#02132D] font-semibold p-2 border-2 border-[#02132D] hover:border-y-2 rounded-md hover:scale-110 duration-300 transform ease-in";
  const blueButtonStyling =
    "flex items-center bg-[#02132D] shadow-md text-white font-semibold p-2 border border-[#02132D] rounded-md hover:scale-110 duration-300 transform ease-in transform hover:scale-110";
  return (
<div className="relative w-full min-h-[100vh]">
  {/* Background Video */}
  <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
    <source src="/fullInterfaceVideo.mp4" type="video/mp4" />
  </video>

  {/* Overlay & Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-blue-400/90 to-green-100 text-[#02132D] z-10">
    {/* Header Section */}

    {/* Hero Section */}
    <div className="flex flex-col gap-10 items-center justify-center bg-teal-400/10 inset-0 absolute pb-5">
      <div className="mb-10">
        <LandingPageHeader />
      </div>

      <div className="md:w-2/3 h-2/3 flex flex-col gap-y-10 justify-center items-center px-5">
      <div className="flex flex-col justify-center items-center"><Carousel textArray={topHeroTexts} duration={3000} />
        <p className="p-4 font-semibold text-amber-700 text-xl">
          Effortless Task Management at Your Fingertips
        </p></div>
        

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
</div>

  );
};

export default LandingPageSection1;
