import { Link } from "react-router-dom";
import { AlyeqeenLandingPageLogo } from "./ToDoLogo";

const LandingPageHeader = () => {
  const linkClass = "text-[#02132D] hover:bg-[#02132D] hover:cursor-pointer p-2 rounded-md hover:text-white whitespace-nowrap";
  return (
    <div className="text-khula flex flex-col items-center justify-center gap-y-8">
      <div className="">
        <Link title="Al-Yeqeen Task Tracker Home" to="/">
          <AlyeqeenLandingPageLogo logoStyling="h-[80px] w-[180px]" />
        </Link>
      </div>

      <nav className="font-bold">
        <ul className="flex gap-3 justify-center">
          <li
            className={linkClass}
            onClick={() => {
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Features
          </li>
          <li
            className={linkClass}
            onClick={() => {
              document.getElementById("alyeqeenapps")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Al-Yeqeen Apps
          </li>
          <li
            className={linkClass}
            onClick={() => {
              document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPageHeader;
