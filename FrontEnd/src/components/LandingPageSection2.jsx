import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import { AlyeqeenTaskTrackerInterface } from "./ToDoLogo";

import { Link } from "react-router-dom";
import {useState } from "react";



 
const LandingPageSection2 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const taskAccordionTitleList = ["Friendly Navigation", "Filtering Section", "Task Layout", "Task Operations"];


  const taskAccordionContentList = [
    "Effortlessly navigate between your tasks, dashboard and home page. The intuitive design allows for quick access to task management features, ensuring you can focus on your productivity without unnecessary distractions.",
    "Enhance your task management with a robust filtering section. Sort tasks by date, filter them by status, and utilize date range options to find what you need quickly. You can also search for tasks by name to streamline your workflow and keep everything organized.",
    "Each task is presented in a clear, card-based interface that highlights its current status and due dates. This design allows for instant recognition of pending tasks. Easily select individual or multiple tasks for quick actions such as deleting or editing, providing you with a seamless management experience.",
    "Perform essential operations effortlessly with options to edit, view, delete, or add new tasks. The user-friendly interface ensures that managing your tasks is both efficient and straightforward, allowing you to stay on top of your to-do list with ease."
  ];
  const taskAccordionTitleStyle =
    "whitespace-nowrap font-bold text-xl flex items-center justify-between rounded gap-x-4";
  const taskAccordionContentStyle = "flex items-center font-semibold h-[150px]";
  const transparentButtonStyle = "border-2 border-white rounded-md p-4 font-semibold hover:scale-110 duration-300 transform ease-in";

  const handleToggle = (index) => {
    setOpenIndex((openIndex) => (openIndex === index ? null : index));
  };

 
  
  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-500 to-[#0b113e] text-white px-20 py-10">
      {/* div one title */}
      <div className="flex items-center justify-between">
        <div className="text-center font-bold text-[30px] w-full">Task Page - Adding & Managing Tasks</div>

      </div>

      {/* div two */}

      <div className="flex items-center justify-between gap-x-10 ">
        {/* task page accordion */}
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
              borderBottom="border-b-2" borderLeft="border-l-4"
            />
          ))}
        </Accordion>

        <div className="w-[60%] rounded-md border shadow-lg">
        <AlyeqeenTaskTrackerInterface className="h-[1000px] w-[500px]" imgPath="/taskTrackerInterface.png" />
        </div>
      </div>
      {/* div 3 button */}
      <div className="mt-5 flex justify-center">
        <Link to="/signup">
          <button title="Register" type="button" className={transparentButtonStyle}>
            Try it Now - It's Free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageSection2;
