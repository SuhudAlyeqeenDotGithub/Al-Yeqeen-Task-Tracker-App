import { Link } from "react-router-dom";
import { AlyeqeenLandingPageLogo } from "./ToDoLogo";

const LandingPageHeader = ({ children, styling }) => {
  const linkClass = "text-[#02132D] text-md font-semibold hover:bg-[#02132D] p-2 rounded-md hover:text-white";
  return (
    <div className={styling}>
      <header className="flex flex-wrap py-1 items-center px-32 gap-y-4 justify-center md:justify-start bg-gradient-to-r from-blue-300 to-[#EFF1FD] z-40">
        <div className="justify-center flex-shrink-0 md:mr-40 lg:mr-96 mt-10">
          <Link title="Al-Yeqeen Task Tracker Home" to="/">
            <AlyeqeenLandingPageLogo logoStyling="h-[100px] w-[220px]" />
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
      {children}{" "}
    </div>
  );
};

export default LandingPageHeader;
