import AlyeqeenAppCard from "./AlyeqeenAppCard";

import { Link } from "react-router-dom";

const LandingPageSection4 = () => {
  const alyeqeenApps = [
    {
      name: "Al-Yeqeen Task Tracker",
      description:
        "A task management app that provides a comprehensive and intuitive interface, allowing users to efficiently organize and track their workflow by offering a clear breakdown of tasks, including completed, in-progress, and terminated tasks, all at a glance.",
      visitLink: "",
      image: "/tasktrakerimage.png"
    },
    {
      name: "Al-Yeqeen Portfolio",
      description:
        "A personal portfolio showcasing my professional experience, education, and projects, highlighting my skills and achievements, while boosting online engagement by 90%",
      visitLink: "https://suhud-ayodeji-yekini-portfolio.vercel.app/",
      image: "/portfolioimage.png"
    },
    {
      name: "Al-Yeqeen Bot",
      description:
        "Al-Yeqeen Bot is an intelligent assistant that helps users quickly find information about me. It offers customizable features like language preferences, theme colors, and chat visibility, making the website 95% easier to explore.",
      visitLink: "https://suhud-ayodeji-yekini-portfolio.vercel.app/",
      image: "/alyeqeenbotimage.png"
    }
  ];


  const transparentButtonStyle =
    "text-mydarkblue border-2 border-[#02132D] rounded-md p-4 font-bold transform hover:scale-110 duration-300";
  return (
    <div className="bg-gradient-to-r from-blue-200 to-green-100 py-10 px-20 font-semibold text-[#02132D] flex flex-col items-center justify-center gap-y-10">
      <h1 className="flex items-center justify-center text-[30px] font-extrabold">Al-Yeqeen Apps</h1>
      <div className="flex gap-x-8 p-6 rounded-lg overflow-auto scrollbar scrollbar-thumb-[#02132D] [&::-webkit-scrollbar-thumb]:rounded-full">
        {alyeqeenApps.map(({ name, description, visitLink, image }) => {
          return (
            <AlyeqeenAppCard key={name} appName={name} appDescription={description} linkTo={visitLink} image={image} />
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
