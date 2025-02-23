import AlyeqeenAppCard from "./AlyeqeenAppCard";
import LogoEx from "../assets/landingpageAlyeqeenLogo.png";
import { Link } from "react-router-dom";

const LandingPageSection4 = () => {
  const alyeqeenAppTitle = [
    "Al-Yeqeen Attendance Tracker",
    "Al-Yeqeen Calculator",
    "Al-Yeqeen Currency Converter",
    "Al-Yeqeen Music",
    "Al-Yeqeen Assessment Tracker",
    "Al-Yeqeen Bot"
  ];
  const alyeqeenAppContent = [
    "An ultimate attendance tacker",
    "An optimised calculator",
    "An authentic currency converter",
    "Enjoy Classic Music",
    "Confirm Assessment tracker",
    "Original Bot"
  ];
  const cardContainerStyling =
    "flex flex-col gap-y-4 border border-zinc-400 shadow-sm shadow-sky-900 rounded-2xl bg-[#FFFCF9] w-[450px] h-[450px] p-6 mb-6";
  const logoStyle = "w-[150px] h-[80px]";
  const transparentButtonStyle = "text-white bg-blue-900 border-[#02132D] rounded-md p-4 font-semibold transform hover:scale-110";
  return (
    <div className="bg-gradient-to-r from-gray-300 to-yellow-50 py-4 px-20 font-semibold text-[#02132D] flex flex-col gap-y-10">
      <h1 className="font-bold flex items-center justify-center text-[30px]">Al-Yeqeen Apps</h1>
      <div className="flex gap-x-4 p-6 rounded-lg overflow-auto scrollbar scrollbar-thumb-[#02132D] scrollbar-w-2">
        {alyeqeenAppTitle.map((title, index) => {
          return (
            <AlyeqeenAppCard
            key={index}
              cardStyling={cardContainerStyling}
              appLogo={LogoEx}
              logoAlt={alyeqeenAppTitle[index] + " Logo"}
              logoStyling={logoStyle}
              appName={title}
              appDescription={alyeqeenAppContent[index]}
              linkTo="google.com"
            />
          );
        })}
      </div>
      <div className="mt-5 flex justify-center">
        <Link to="/signup">
          <button title="Register" type="button" className={transparentButtonStyle}>
            Learn More About Al-Yeqeen
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageSection4;
