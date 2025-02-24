import React from "react";

const AlyeqeenAppCard = ({ cardStyling, appLogo, logoAlt, logoStyling, appName, appDescription, linkTo }) => {
  return (
    <>
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        <div className={cardStyling}>
          <div className="flex flex-col items-center gap-x-10 gap-y-5">
            <div>
              <img src={appLogo} alt={logoAlt} className={logoStyling} />
            </div>
            <h1 className="whitespace-nowrap font-bold text-xl">{appName}</h1>
          </div>

          <p>{appDescription}</p>
          <button type="button" title={"Try " + appName} className="bg-mydarkblue text-white w-full rounded-md p-4 font-bold">
            Explore {appName}
          </button>
        </div>
      </a>
    </>
  );
};

export default AlyeqeenAppCard;
