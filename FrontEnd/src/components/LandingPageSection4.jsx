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
    "A simple and efficient tool for tracking attendance in schools, helping teachers and students stay organised. Also suitable for workplaces that require attendance monitoring.",
    "A fast and reliable calculator for all your mathematical needs, from basic arithmetic to advanced functions.",
    "Instantly convert currencies with real-time exchange rates to make international transactions easier.",
    "A dedicated platform to showcase and stream my music, giving listeners easy access to my latest tracks.",
    "Designed for schools, this tool helps teachers and students keep track of assessments, scores, and progress effortlessly.",
    "A smart assistant that introduces users to me and my projects, providing insights and updates in an interactive way."
  ];
  const cardContainerStyling =
    "flex flex-col justify-between gap-y-4 border border-mydarkblue bg-gradient-to-l from-green-50 to-yellow-50 transform duration-1000 hover:scale-110 hover:shadow-sm shadow-blue-900 rounded-2xl bg-[#FFFCF9] w-[450px] h-[450px] p-6 mb-6";
  const logoStyle = "w-[150px] h-[80px]";
  const transparentButtonStyle = "text-mydarkblue border-2 border-[#02132D] rounded-md p-4 font-bold transform hover:scale-110";
  return (
    <div className="bg-gradient-to-r from-blue-200 to-green-100 py-4 px-20 font-semibold text-[#02132D] flex flex-col gap-y-10">
      <h1 className="font-bold flex items-center justify-center text-[30px]">Al-Yeqeen Apps</h1>
      <div className="flex gap-x-8 p-6 rounded-lg overflow-auto scrollbar scrollbar-thumb-[#02132D] [&::-webkit-scrollbar-thumb]:rounded-full">
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
