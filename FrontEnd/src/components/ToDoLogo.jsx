import LandingPageLogo from "../assets/landingpageAlyeqeenLogo.png";

const ToDoLogo = ({ logoStyling }) => {
  return (
    <img src={LandingPageLogo} alt="Al-Yeqeen Task Tracker Logo" className={logoStyling} />
  );
};

const AlyeqeenLandingPageLogo = ({ logoStyling }) => {
  return (
    <img src={LandingPageLogo} alt="Al-Yeqeen Task Tracker Logo" className={logoStyling} />
  );
};

const AlyeqeenTaskTrackerInterface = ({ logoStyling, imgPath }) => {
  return (
    <img src={imgPath} alt="Al-Yeqeen Task Tracker Interface" className={logoStyling} />
  );
};




export {ToDoLogo, AlyeqeenLandingPageLogo, AlyeqeenTaskTrackerInterface};
