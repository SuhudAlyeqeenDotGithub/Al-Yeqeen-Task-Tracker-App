import { useEffect, useState } from "react";

export const RecentTasks = () => {
  return (
    <div className="bg-blue-200 p-8 m-10 flex flex-wrap justify-center items-center font-semibold border-2 border-blue-400 rounded shadow-md">
      Here are your Recent Tasks
    </div>
  );
};

export const RegularParagraph = ({
  children,
  styling = "text-sm text-blue-900 font-semibold",
}) => {
  return <p className={styling}>{children}</p>;
};

export const TaskStatusChip = ({ children }) => {
  const [chipStyling, setChipStyling] = useState("");

  useEffect(() => {
    if (children === "Completed") {
      setChipStyling(
        `bg-green-200 border border-green-700 text-green-800 font-semibold shadow rounded-xl pl-2 pr-2 pt-1 pb-1`,
      );
    } else if (children === "In Progress") {
      setChipStyling(
        `bg-yellow-200 border border-yellow-700 text-yellow-800 font-semibold shadow rounded-xl pl-2 pr-2 pt-1 pb-1`,
      );
    } else {
      setChipStyling(
        `bg-blue-200 border border-blue-700 text-blue-800 font-semibold shadow rounded-xl pl-2 pr-2 pt-1 pb-1`,
      );
    }
  }, [children]);

  return <div className={chipStyling}>{children}</div>;
};
