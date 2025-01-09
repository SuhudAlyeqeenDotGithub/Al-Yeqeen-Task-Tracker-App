import { useSelector, useDispatch } from "react-redux";
import { setNewTaskDialogIsOpen } from "../reduxFeatures/dialogSlice";
import { useState } from "react";
import AllPurposeContainer from "./AllPurposeContainer";
import AllPurposeInput from "./allPurposeInput";
import { enableScroll } from "../UtilityFunctions/UtilityFunctions";
import AllPurposeLabel from "./AllPurposeLabel";
import { closeIcon } from "./icons";

const NewTaskDialog = () => {
  const { newTaskDialogIsOpen } = useSelector((state) => state.dialog);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    taskName: "",
    taskDescription: "",
    taskStartDate: "",
    taskDueDate: "",
    taskStartTime: "",
    taskDueTime: "",
    taskStatus: ""
  });

  const handleFormData = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const { taskName, taskDescription, taskStartDate, taskDueDate, taskStartTime, taskDueTime, taskStatus } = formData;

  const closeDialog = () => {
    if (newTaskDialogIsOpen === true) {
      dispatch(setNewTaskDialogIsOpen(false));
      enableScroll();
    }
  };

  const scrollBarStyling = `overflow-auto scrollbar scrollbar-thumb-white scrollbar-track-blue-900`;
  const dialogueStyling = `${scrollBarStyling}  bg-white z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-8 pr-8 pt-2 rounded-xl border border-blue-300 shadow-lg max-w-md w-full flex flex-col pb-8 min-h-[400px] max-h-[650px]`;
  const overlayStyling = `fixed bg-blue-100 bg-opacity-90 inset-0 border z-10 flex justify-center items-center`;
  const textAreaStyling = `shadow-sm border border-blue-800 placeholder-blue-900 text-blue-900 text-sm font-semibold border border-blue-500 w-full p-2 rounded focus:border-2 border-blue-500 outline-none`;
  const buttonStyling = `${taskName === "" ? "hidden": ""} bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded w-full hover:bg-blue-900`;
  const optionStyling = `font-semibold hover:bg-blue-900`;
  const dateTimeDivStyling = "grid grid-cols-2 grid-rows-1 gap-x-6 min-w-full";
  const closeButtonStyling = `justify-self-end text-blue-900 hover:text-white text-xl p-2 rounded-lg`;
  const validationStyling = "text-red-500 font-semibold mb-5 text-center text-[12px]";

  return (
    newTaskDialogIsOpen && (
      <div>
        <div className={overlayStyling}> </div>
        <AllPurposeContainer containerStyling={dialogueStyling}>
          <div className="w-full flex flex-row mb-8">
            <h1 className="w-full pt-2 text-blue-900 text-2xl font-bold">New Task</h1>
            <button className={`hover:bg-red-500 ${closeButtonStyling}`} onClick={closeDialog}>
              {closeIcon}
            </button>
          </div>
          <form className= "w-full space-y-4">
          <div className="w-full">
            <AllPurposeInput
              inputPlaceHolder="Task Name *"
              inputValue={taskName}
              inputType="text"
              inputName="taskName"
              styling=""
              onchangeFunction={handleFormData}
            />
            <AllPurposeLabel labelStyling={validationStyling}>
              {taskName === "" ? "Please enter a task name" : ""}
            </AllPurposeLabel>
          </div>
          <textarea
            placeholder="Task Description"
            rows="5"
            cols="40"
            value={taskDescription}
            name="taskDescription"
            className={textAreaStyling}
            onChange={handleFormData}
          />
          <div className={dateTimeDivStyling}>
            <div className ="space-y-1">
              <AllPurposeLabel inputId="taskStartDate">Start Date</AllPurposeLabel>
              <AllPurposeInput
                inputValue={taskStartDate}
                inputType="date"
                inputName="taskStartDate"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
            <div className ="space-y-1">
              <AllPurposeLabel inputId="taskEndDate">Due Date</AllPurposeLabel>
              <AllPurposeInput
                inputValue={taskDueDate}
                inputType="date"
                inputName="taskDueDate"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
          </div>
          <div className={dateTimeDivStyling}>
            <div className ="space-y-1">
              <AllPurposeLabel inputId="taskStartTime">Start Time</AllPurposeLabel>
              <AllPurposeInput
                inputValue={taskStartTime}
                inputType="time"
                inputName="taskStartTime"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
            <div className ="space-y-1">
              <AllPurposeLabel inputId="taskEndTime">Due Time</AllPurposeLabel>
              <AllPurposeInput
                inputValue={taskDueTime}
                inputType="time"
                inputName="taskDueTime"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <AllPurposeLabel inputId="taskStatusDropdown">Select Task Status</AllPurposeLabel>
            <select
              id="taskStatusDropdown"
              value={taskStatus}
              name="taskStatus"
              onChange={handleFormData}
              className={textAreaStyling}
            >
              <option value="Completed" className={optionStyling}>
                Completed
              </option>
              <option value="In Progress" className={optionStyling}>
                In Progress
              </option>
              <option value="Terminated" className={optionStyling}>
                Terminated
              </option>
            </select>
          </div>
          <button type="submit" className={buttonStyling} onClick={closeDialog}>
            Add Task
          </button>
          </form>
        </AllPurposeContainer>
      </div>
    )
  );
};
export default NewTaskDialog;
