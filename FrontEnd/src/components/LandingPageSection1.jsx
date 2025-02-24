import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const LandingPageSection1 = () => {
  const topHeroTexts = [
    "A Practical Task Tracker to Help You Stay Productive Without the Extra Complexity.",
    "Designed for Simplicity - Easily Manage Your Tasks and Stay on Top of Your Day.",
    "Stay Focused and Organised with a No-Nonsense Task Tracker That Works for You.",
    "A Simple and Effective Way to Keep Track of Your Daily Tasks Without the Hassle."
  ];

  const whiteButtonStyling =
    "flex items-center shadow-md text-[#02132D] font-bold p-3 border-2 border-[#02132D] hover:border-y-2 rounded-md transform hover:scale-110";
  const blueButtonStyling =
    "flex items-center bg-[#02132D] shadow-md text-white font-bold p-3 border border-[#02132D] hover:border-y-2 rounded-md transform hover:scale-110";
  return (
    <div className="bg-gradient-to-r from-blue-300 to-[#EFF1FD] py-20">
      {/* build the top page to consist of hero and button sections fo 3 main divs */}
      <div className="flex p-20 justify-center items-center">
        {/* right div */}
        <div className="flex flex-col gap-y-10 justify-center items-center w-full">
          <div className="font-extrabold text-[48px] font-opensans flex justify-center">
            <Carousel textArray={topHeroTexts} duration={parseInt("5000")} />
          </div>

          <div className="flex items-center justify-center text-[#02132D] font-extrabold whitespace-nowrap border-y-2 border-[#060242] py-4 mr-52 h-[60px] w-[500px] duration-1000 hover:scale-120">
            Effortless Task Management at Your Fingertips
          </div>

          <div className="mr-40">
            <Link to="/login">
              <button title="Your tasks" type="button" className={whiteButtonStyling}>
                View Your Tasks
              </button>{" "}
            </Link>
          </div>
        </div>

        {/* left div */}
        <div className="flex flex-col gap-y-10 justify-center items-center w-full py-10">
          <div className="duration-1000 hover:scale-120 font-kanit h-[150px] flex items-center text-center font-semibold italic whitespace-nowrap border-x-4 rounded-lg bg-gradient-to-l from-green-700 to-blue-900 shadow-md text-white cursor-pointer border-[#060242] px-4 transform hover:bg-[#060242] hover-border-none hover:bg-gradient-to-l hover:from-blue-700 hover:to-green-500">
            Stay Organized. Stay Productive. <br />
            The Smartest Way to Track & Manage Your Tasks. <br /> Simplify Your Workflow with Al-Yeqeen Task Tracker.
          </div>

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
          <div className="ml-20">
            <button title="Contact Al-Yeqeen" type="button" className={whiteButtonStyling}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSection1;
