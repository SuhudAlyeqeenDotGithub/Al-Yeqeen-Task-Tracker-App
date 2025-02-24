import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import { AlyeqeenTaskTrackerInterface } from "./ToDoLogo";
import VideoComponent from "./VideoComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import dashboardImage from "../assets/dashboard.png";

const LandingPageSection3 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const taskAccordionTitleList = ["Task Summary", "Visual Insights", "Smart Organisation"];

  const taskAccordionContentList = [
    "Stay on top of your progress with a clear breakdown of completed, in-progress, and terminated tasks at a glance.",
    "Gain valuable insights with visual charts and graphs, making it easy to track task status effortlessly.",
    "Make smarter decisions and stay organised with an intuitive overview of your workflow!"
  ];
  const taskAccordionTitleStyle =
    "whitespace-nowrap font-bold text-xl flex items-center justify-between rounded gap-x-4";
  const taskAccordionContentStyle = "flex items-center font-semibold h-[150px]";
  const transparentButtonStyle = "border-2 border-[#02132D] rounded-md p-4 font-bold hover:scale-110";
  const blueButtonStyle = "rounded-md bg-mydarkblue p-4 text-white font-bold hover:scale-110";

  const handleToggle = (index) => {
    setOpenIndex((openIndex) => (openIndex === index ? null : index));
  };

  const handleMediaSwitch = (media) => {
    setMediaType(media);
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-cyan-600 to-purple-200 text-[#02132D] px-20 py-10">
      {/* div one title */}

      <div className="flex items-center justify-between">
        <div className="text-center font-bold text-[30px] w-full">Task Page - Adding & Managing Tasks</div>
      </div>
      <div className="flex items-center justify-between gap-x-10 ">
        {/* task page accordion */}

        <div className="w-[60%] rounded-xl shadow-lg">
          <AlyeqeenTaskTrackerInterface className="h-[1000px] w-[500px]" imgPath={dashboardImage} />
        </div>
        <Accordion styling="flex flex-col justify-center rounded-md p-4 w-[40%] h-[700px]">
          {taskAccordionTitleList.map((item, index) => (
            <AccordionItem
              key={index}
              title={taskAccordionTitleList[index]}
              content={taskAccordionContentList[index]}
              titleStyle={taskAccordionTitleStyle}
              contentStyle={taskAccordionContentStyle}
              isOpen={openIndex === index}
              onToggle={() => {
                handleToggle(index);
              }}
              borderBottom="border-b-2 border-[#02132D]"
              borderLeft="border-l-4 border-[#02132D]"
            />
          ))}
        </Accordion>
      </div>
      {/* div 3 button */}
      <div className="flex gap-20 mt-5 justify-center">
        <Link to="/signup">
          <button title="Register" type="button" className={transparentButtonStyle}>
            Try it Now - It's Free
          </button>
        </Link>
        <Link to="/signup">
          <button title="Register" type="button" className={blueButtonStyle}>
            Already with us ? Log in
          </button>
        </Link>
      </div>
      {/* div two */}
    </div>
  );
};

export default LandingPageSection3;
