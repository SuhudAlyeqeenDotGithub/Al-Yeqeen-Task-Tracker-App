import Logo from "../assets/alyeqeenLogo.png";
import LandingPageLogo from "../assets/landingpageAlyeqeenLogo.png";
import TaskTrackerInterface from "../assets/taskTrackerInterface.png";

const ToDoLogo = ({ logoStyling }) => {
  return (
    <img src={Logo} alt="Al-Yeqeen Task Tracker Logo" className={logoStyling} />
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
