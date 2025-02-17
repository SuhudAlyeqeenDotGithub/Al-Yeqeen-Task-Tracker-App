import { Link } from "react-router-dom";
import { AlyeqeenLandingPageLogo } from "./ToDoLogo";

const LandingPageSection1 = () => {
  const linkClass = "text-[#02132D] text-md font-semibold hover:bg-[#02132D] p-2 rounded-md hover:text-white";
  const whiteButtonStyling =
    "h-[45px] shadow-md hover:text-lg text-[#02132D] font-semibold py-2 px-4 border border-[#02132D] hover:border-y-2 rounded-md";
  const blueButtonStyling =
    "w-[200px] bg-[#02132D] hover:text-lg shadow-md text-white font-semibold py-2 px-4 border border-[#02132D] rounded-md";
  return (
    <div className="bg-gradient-to-r from-[#BFDBFE] to-[#EFF1FD]">
      {/* build the header to consist of the nav and logo */}
      <header className="flex flex-wrap sticky top-0 py-8 items-center px-32 gap-y-4 justify-center md:justify-start bg-gradient-to-r from-blue-200 to-[#EFF1FD]">
        <div className="justify-center flex-shrink-0 md:mr-40 lg:mr-96">
          <Link title="Al-Yeqeen Task Tracker Home" to="/">
            <AlyeqeenLandingPageLogo logoStyling="h-[110px] w-[200px] py-2" />
          </Link>
        </div>

        <nav className="lg:ml-20">
          <ul className="flex sm:flex-wrap space-x-4 justify-center">
            <li className="whitespace-nowrap">
              <Link to="/alyeqeenTaskTracker/mytasks" className={linkClass}>
                Features
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to="/alyeqeenTaskTracker/dashboard" className={linkClass}>
                Al-Yeqeen Apps
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* build the top page to consist of hero and button sections fo 3 main divs */}
      <div className="flex flex-col p-20 gap-y-28">
        {/* first hero div */}
        <div className="flex justify-between">
          <div className="font-bold text-[40px] w-[50%]">
            A Comprehensive Solution to Enhance Your Task Management Efficiency.
          </div>
          <div className="h-[150px] flex items-center text-center hover:text-xl font-semibold italic whitespace-nowrap border-x-4 hover:border-x-6 rounded-lg bg-gradient-to-l from-green-700 to-blue-900 shadow-md text-white cursor-pointer border-[#060242] px-4 mr-32">
            Stay Organized. Stay Productive. <br />
            The Smartest Way to Track & Manage Your Tasks. <br /> Simplify Your Workflow with Al-Yeqeen Task Tracker.
          </div>
        </div>

        {/* second hero div */}
        <div className="flex justify-center w-full items-center">
          {/* left div */}
          <div className="flex flex-col gap-y-20 items-center justify-center w-full">
            <div className="flex items-center font-semibold border-y-2 border-[#060242] py-4 mr-52 hover:text-xl h-[60px]">
              Effortless Task Management at Your Fingertips
            </div>
            <div className="mr-40">
              <button title="Your tasks" type="button" className={whiteButtonStyling}>
                View Your Tasks
              </button>
            </div>
          </div>

          {/* right div */}
          <div className="flex flex-col gap-y-20 items-center justify-center w-full">
            <div className="flex justify-between h-[50px] w-[500px]">
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
    </div>
  );
};

export default LandingPageSection1;
