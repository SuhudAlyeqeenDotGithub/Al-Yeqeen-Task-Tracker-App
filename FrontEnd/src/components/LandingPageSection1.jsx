import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import LandingPageHeader from "../components/LandingPageHeader";

const LandingPageSection1 = () => {
  const topHeroTexts = [
    "A Practical Task Tracker to Help You Stay Productive Without the Extra Complexity.",
    "Designed for Simplicity - Easily Manage Your Tasks and Stay on Top of Your Day.",
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
    <div className="flex flex-col py-10 justify-center items-center bg-gradient-to-r from-blue-300 to-green-100 text-[#02132D] md:h-[100vh]">
     
      {/* build the top page to consist of hero and button sections fo 3 main divs */}
 <LandingPageHeader />
      <div className="flex p-10 items-center justify-center">
        <div className="md:w-1/2 flex flex-col gap-y-2 justify-center items-center md:mt-20 mt-5">
          <Carousel textArray={topHeroTexts} duration={3000} />
          <p className="p-4 font-semibold mb-10 text-amber-700 text-xl">Effortless Task Management at Your Fingertips</p>
          <div className="flex gap-x-10 justify-center h-[50px]">
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

          <div className="mt-10 flex justify-center">
            <Link to="/login">
              <button title="Your tasks" type="button" className={whiteButtonStyling}>
                View Your Tasks
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* left div */}
      {/* <div className="flex flex-col gap-y-10 justify-center items-center w-full py-10">
          <div
            className={`duration-1000 ${
              hoverActivated ? "scale-120" : ""
            } font-kanit h-[150px] flex items-center text-center font-semibold italic whitespace-nowrap border-x-4 rounded-lg bg-gradient-to-l from-green-700 to-blue-900 shadow-md text-white cursor-pointer border-[#060242] px-4 transform`}
          >
            Stay Organized. Stay Productive. <br />
            The Smartest Way to Track & Manage Your Tasks. <br /> Simplify Your Workflow with Al-Yeqeen Task Tracker.
          </div>

        
          <div className="ml-20">
            <button title="Contact Al-Yeqeen" type="button" className={whiteButtonStyling}>
              Contact Me
            </button>
          </div>
        </div> */}
    </div>
  );
};

export default LandingPageSection1;
