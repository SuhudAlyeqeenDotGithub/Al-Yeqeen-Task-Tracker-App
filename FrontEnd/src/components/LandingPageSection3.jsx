import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import { Link } from "react-router-dom";
import { useState } from "react";

const LandingPageSection3 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const taskAccordionTitleList = ["Task Summary", "Visual Insights", "Smart Organisation"];

  const taskAccordionContentList = [
    "Stay on top of your progress with a clear breakdown of completed, in-progress, and terminated tasks at a glance.",
    "Gain valuable insights with visual charts and graphs, making it easy to track task status effortlessly.",
    "Make smarter decisions and stay organised with an intuitive overview of your workflow!"
  ];

  const taskAccordionContentStyle = "flex items-center font-semibold";
  const transparentButtonStyle =
    "border-2 border-[#02132D] whitespace-nowrap rounded-md p-4 font-bold hover:scale-110 duration-300 transform ease-in";
  const blueButtonStyle =
    "rounded-md bg-mydarkblue whitespace-nowrap p-4 text-white font-bold hover:scale-110 duration-300 transform ease-in";

  const handleToggle = (index) => {
    setOpenIndex((openIndex) => (openIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-cyan-600 to-purple-200 text-[#02132D] md:px-15 gap-10 px-5 py-10">
      {/* div one title */}

      <div className="flex items-center justify-between">
        <h1 className="text-center md:my-5 font-extrabold md:text-[35px] text-[30px] w-full">
          Task Page - Adding & Managing Tasks
        </h1>
      </div>

      {/* div two */}

      <div className="flex md:flex-row flex-col items-center justify-between gap-5 w-full">
        {/* task page accordion */}
        <div className="w-85 md:w-full shadow-lg">
          <img src="/dashboard.png" />
        </div>
        <Accordion styling="flex flex-col justify-center items-center rounded-md w-0 md:w-[70%]">
          {taskAccordionTitleList.map((item, index) => (
            <AccordionItem
              key={index}
              title={taskAccordionTitleList[index]}
              content={taskAccordionContentList[index]}
              contentStyle={taskAccordionContentStyle}
              isOpen={openIndex === index}
              onToggle={() => {
                handleToggle(index);
              }}
              borderBottom="border-b-2"
              borderLeft="border-l-4"
            />
          ))}
        </Accordion>
      </div>
      {/* div 3 button */}
      <div className="flex flex-col md:flex gap-5 mt-10 justify-center items-center">
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
