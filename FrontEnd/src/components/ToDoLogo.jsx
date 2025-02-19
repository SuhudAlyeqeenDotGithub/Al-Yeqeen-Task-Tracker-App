import LandingPageLogo from "../assets/landingpageAlyeqeenLogo.png";
import TaskTrackerInterface from "../assets/taskTrackerInterface.png";

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

const AlyeqeenTaskTrackerInterface = ({ logoStyling }) => {
  return (
    <img src={TaskTrackerInterface} alt="Al-Yeqeen Task Tracker Logo" className={logoStyling} />
  );
};




export {ToDoLogo, AlyeqeenLandingPageLogo, AlyeqeenTaskTrackerInterface};
