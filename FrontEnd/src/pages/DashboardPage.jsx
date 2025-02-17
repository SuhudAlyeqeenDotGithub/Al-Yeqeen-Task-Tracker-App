import { useSelector } from "react-redux";
import AllPurposeLabel from "../components/AllPurposeLabel";
import { MyComposedChart, MyPieChart } from "./chart";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function DashboardPage() {
  const location = useLocation();
  useEffect(() => {
    try {
      dispatch(getTasks());
    } catch (error) {}
  }, [location]);

  const { tasks: tasksData, isSuccess, isLoading, isError, errorMessage } = useSelector((state) => state.task);

  const dashboardEntityStyle =
    "shadow-lg shadow-200 p-4 rounded-md bg-white flex flex-col sm:flex-wrap items-center  w-full h-full justify-center gap-y-4";
  const chartDivStyle =
    "border border-[#0B1869] shadow-lg shadow-blue-200 p-2 rounded-md bg-white w-full items-center justify-center";
  const labelDefaultStyling = " text-[14px] font-semibold";
  const bigTextStyling = "text-[44px] font-semibold";
  const innerBoxStyling = "w-[50%] text-center";
  const outerBoxStyling = "flex flex-row justify-between w-full px-4";

  const completedTasks = tasksData.filter((task) => task.taskStatus === "Completed").length;
  const percentageCompletion = Math.round((completedTasks / tasksData.length) * 100) + "%";

  const inProgressTasks = tasksData.filter((task) => task.taskStatus === "In Progress").length;
  const percentageInprogress = Math.round((inProgressTasks / tasksData.length) * 100) + "%";

  const terminatedTasks = tasksData.filter((task) => task.taskStatus === "Terminated").length;
  const percentageTerminated = Math.round((terminatedTasks / tasksData.length) * 100) + "%";

  const data = [
    { taskStatus: "Completed", value: completedTasks },
    { taskStatus: "In Progress", value: inProgressTasks },
    { taskStatus: "Terminated", value: terminatedTasks }
  ];

  return (
    <div>
      <div className="flex flex-col gap-y-8 px-10 py-10 rounded-md border border-[#0B1869] shadow-md mx-20 mt-5">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 mr-6 min-w-[100%]">
          <div className={`${dashboardEntityStyle} bg-blue-900 text-white`}>
            <AllPurposeLabel labelStyling={labelDefaultStyling}>Total Tasks</AllPurposeLabel>
            <div>
              <AllPurposeLabel labelStyling={bigTextStyling}>{tasksData.length}</AllPurposeLabel>
            </div>
          </div>
          <div className={`${dashboardEntityStyle} bg-green-800 text-white`}>
            <AllPurposeLabel labelStyling={labelDefaultStyling}>Completed Tasks</AllPurposeLabel>
            <div className={outerBoxStyling}>
              <div className={innerBoxStyling}>
                <AllPurposeLabel labelStyling={bigTextStyling}>{completedTasks}</AllPurposeLabel>
              </div>
              <div className={innerBoxStyling}>
                <AllPurposeLabel labelStyling={bigTextStyling}>{percentageCompletion}</AllPurposeLabel>
              </div>
            </div>
          </div>
          <div className={`${dashboardEntityStyle} bg-yellow-600 text-white`}>
            <AllPurposeLabel labelStyling={labelDefaultStyling}>In Progress Tasks</AllPurposeLabel>
            <div className={outerBoxStyling}>
              <div className={innerBoxStyling}>
                <AllPurposeLabel labelStyling={bigTextStyling}>{inProgressTasks}</AllPurposeLabel>
              </div>
              <div className={innerBoxStyling}>
                <AllPurposeLabel labelStyling={bigTextStyling}>{percentageInprogress}</AllPurposeLabel>
              </div>
            </div>
          </div>

          <div className={`${dashboardEntityStyle} bg-red-900 text-white`}>
            <AllPurposeLabel labelStyling={labelDefaultStyling}>Terminated Tasks</AllPurposeLabel>
            <div className={outerBoxStyling}>
              <div className={innerBoxStyling}>
                <AllPurposeLabel labelStyling={bigTextStyling}>{terminatedTasks}</AllPurposeLabel>
              </div>
              <div className={innerBoxStyling}>
                <AllPurposeLabel labelStyling={bigTextStyling}>{percentageTerminated}</AllPurposeLabel>
              </div>
            </div>
          </div>
        </div>

        <div className="relative gap-4 flex flex-wrap md:flex-nowrap">
          <div className={chartDivStyle}>
            <MyComposedChart dataProp={data} />
          </div>

          <div className={chartDivStyle}>
            <MyPieChart dataProp={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
