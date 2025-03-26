import { Link } from "react-router-dom";
import { AlyeqeenLandingPageLogo } from "./ToDoLogo";

const LandingPageHeader = () => {
  const linkClass = "text-[#02132D] hover:bg-[#02132D] p-2 rounded-md hover:text-white";
  return (
    <div className="text-khula flex flex-col items-center justify-center gap-y-8">
          <div className="">
          <Link title="Al-Yeqeen Task Tracker Home" to="/">
            <AlyeqeenLandingPageLogo logoStyling="h-[80px] w-[180px]" />
          </Link>
        </div>

        <nav className="font-semibold">
          <ul className="flex gap-4 justify-center">
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

    </div>
  );
};

export default LandingPageHeader;
