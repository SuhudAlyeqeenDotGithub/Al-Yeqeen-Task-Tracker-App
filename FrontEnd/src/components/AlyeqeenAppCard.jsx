import React from "react";

const AlyeqeenAppCard = ({ appName, appDescription, linkTo, image }) => {
  return (
    <>
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        <div className="bg-white flex flex-col gap-8 p-4 items-center justify-center transform hover:scale-105 duration-300 md:w-[400px] w-[350px] h-[600px] rounded-lg border border-gray-400 shadow-md">
          <div>
            <h1 className="whitespace-nowrap font-extrabold text-xl">{appName}</h1>
          </div>
          <p className="h-[150px]">{appDescription}</p>
          <div>
            <img src={image} alt={`${appName} Image`} />
          </div>
          <div>
            <button
              type="button"
              title={"Try " + appName}
              className="bg-mydarkblue text-white w-full rounded-md p-2 font-bold hover:bg-mydarkblue/90"
            >
              Explore {appName}
            </button>
          </div>
        </div>
      </a>
    </>
  );
};

export default AlyeqeenAppCard;
