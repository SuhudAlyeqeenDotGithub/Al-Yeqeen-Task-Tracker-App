import { useContext, useState } from "react";
import AllPurposeContainer from "./AllPurposeContainer";
import AllPurposeInput from "./allPurposeInput";
import { enableScroll } from "../UtilityFunctions/UtilityFunctions";
import { TaskDialogContext } from "../contexts/TaskContext";
import AllPurposeLabel from "./AllPurposeLabel";
import { closeIcon } from "./icons";

const EditTaskDialog = ({ taskData }) => {
  const {
    editTaskDialogIsOpen,
    setEditTaskDialogIsOpen,
    editTaskDialogFromViewIsOpen,
    setEditDialogTaskFromViewIsOpen,
   } =
    useContext(TaskDialogContext);

    

  const [formData, setFormData] = useState(taskData);

  const {
    taskId,
    taskName,
    taskDescription,
    taskStartDate,
    taskDueDate,
    taskStartTime,
    taskDueTime,
    taskStatus,
  } = formData;


  const handleFormData = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const closeDialog = () => {
    if (editTaskDialogIsOpen) {
      setEditTaskDialogIsOpen(false);
      setEditDialogTaskFromViewIsOpen(false);
      enableScroll();
    }
  };

const scrollBarStyling = `overflow-auto scrollbar scrollbar-thumb-white scrollbar-track-blue-900`;
  const dialogueStyling = `${scrollBarStyling}  bg-white z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-8 pr-8 pb-8 pt-2 rounded-xl border border-blue-300 shadow-lg max-w-md w-full flex flex-wrap justify-center items-center h-full min-h-[200px] max-h-[700px] gap-1`;
  const overlayStyling = `fixed bg-blue-100 bg-opacity-90 inset-0 border z-10 flex justify-center items-center`;
  const textAreaStyling = `shadow-sm border border-blue-800 placeholder-blue-900 text-blue-900 text-sm font-semibold border border-blue-500 w-full p-2 rounded mb-4 mt-2 focus:border-2 border-blue-500 outline-none`;
  const buttonStyling = `bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded w-full hover:bg-blue-900`;
  const optionStyling = `font-semibold hover:bg-blue-900`;
  const dateTimeDivStyling = "grid grid-cols-2 grid-rows-1 gap-6 min-w-full";
  const closeButtonStyling = `justify-self-end text-blue-900 hover:text-white text-xl p-2 rounded-lg`;

  const whatToRender = (<div>
        <div className={overlayStyling}> </div>
        <AllPurposeContainer containerStyling={dialogueStyling}>
          <header className="w-full flex flex-row mb-4">
            <h1 className="w-full pt-2 text-blue-900 text-2xl font-bold">
              Edit Task
            </h1>
            <button title="close"
              className={`hover:bg-red-500 ${closeButtonStyling}`}
              onClick={closeDialog}
            >
              {closeIcon}
            </button>
          </header>
          <div className="text-blue-900 mb-2 w-full font-semibold">
            Task Id: {taskId}
          </div>

          <AllPurposeInput
            inputPlaceHolder="Task Name"
            inputValue={taskName}
            inputType="text"
            inputName="taskName"
            styling=""
            onchangeFunction={handleFormData}
          />
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
            <div>
              <AllPurposeLabel inputId="taskStartDate">
                Start Date
              </AllPurposeLabel>
              <AllPurposeInput
                inputValue={taskStartDate}
                inputType="date"
                inputName="taskStartDate"
                inputId="taskStartDate"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
            <div>
              <AllPurposeLabel inputId="taskEndDate">Due Date</AllPurposeLabel>
              <AllPurposeInput
                inputValue={taskDueDate}
                inputType="date"
                inputName="taskEndDate"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
          </div>
          <div className={dateTimeDivStyling}>
            <div>
              <AllPurposeLabel inputId="taskStartTime">
                Start Time
              </AllPurposeLabel>
              <AllPurposeInput
                inputValue={taskStartTime}
                inputType="time"
                inputName="taskStartTime"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
            <div>
              <AllPurposeLabel inputId="taskEndTime">Due Time</AllPurposeLabel>
              <AllPurposeInput
                inputValue={taskDueTime}
                inputType="time"
                inputName="taskEndTime"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
          </div>

          <AllPurposeLabel inputId="taskStatusDropdown">
            Select Task Status
          </AllPurposeLabel>
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

          <button className={buttonStyling} onClick={closeDialog}>
            Save Task
          </button>
        </AllPurposeContainer>
      </div>)

  
  return (
    (editTaskDialogIsOpen ) &&  whatToRender
  );

};

export default EditTaskDialog;
