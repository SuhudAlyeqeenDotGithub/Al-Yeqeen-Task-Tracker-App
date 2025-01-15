import { useSelector, useDispatch } from "react-redux";
import { setNewTaskDialogIsOpen } from "../reduxFeatures/dialogSlice";
import { useState } from "react";
import AllPurposeContainer from "./AllPurposeContainer";
import AllPurposeInput from "./allPurposeInput";
import { enableScroll } from "../UtilityFunctions/UtilityFunctions";
import AllPurposeLabel from "./AllPurposeLabel";
import { closeIcon } from "./icons";
import { addTask } from "../reduxFeatures/taskState/taskThunk";
import { resetTasks } from "../reduxFeatures/taskState/taskSlice";

const NewTaskDialog = () => {
  const { newTaskDialogIsOpen } = useSelector((state) => state.dialog);
  const { tasks: tasksData, isSuccess, isLoading, isError, errorMessage } = useSelector((state) => state.task);
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

  const [onSubmitNameIssueMessage, setOnSubmitNameIssueMessage] = useState(false);
  const [onSubmitEmptyStatusMessage, setOnSubmitEmptyStatusMessage] = useState(false);

  // function
  // handleAddTask
  //if name field is empty set message to true and return
  const getDatePlusDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const closeDialog = () => {
    if (newTaskDialogIsOpen === true) {
      dispatch(setNewTaskDialogIsOpen(false));
      enableScroll();
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (taskName === "" || taskName.length > 84) {
      setOnSubmitNameIssueMessage(true);
      return;
    } else if (taskStatus === "") {
      setOnSubmitEmptyStatusMessage(true);
      return;
    }

    let formDataToSubmit;

    if (taskStartDate === "" || taskDueDate === "" || taskStartTime === "" || taskDueTime === "") {
      const filledBlankFormData = {
        ...formData,
        taskStartDate: formData.taskStartDate === "" ? new Date() : formData.taskStartDate,
        taskDueDate:
          formData.taskDueDate === "" && formData.taskStartDate === ""
            ? getDatePlusDays(new Date(), 2)
            : formData.taskDueDate === "" && formData.taskStartDate !== ""
            ? getDatePlusDays(formData.taskStartDate, 2)
            : formData.taskDueDate,
        taskStartTime: formData.taskStartTime === "" ? "00:00" : formData.taskStartTime,
        taskDueTime: formData.taskDueTime === "" ? "00:00" : formData.taskDueTime
      };
      formDataToSubmit = filledBlankFormData;
    } else {
      formDataToSubmit = formData;
    }

    dispatch(resetTasks());

    if (newTaskDialogIsOpen) {
      try {
        const tasks = await dispatch(addTask(formDataToSubmit)).unwrap();
        
        if (tasks) {
          dispatch(setNewTaskDialogIsOpen(false));
          enableScroll();
        }
      } catch (error) {}
    }
  };

  const scrollBarStyling = `overflow-auto scrollbar scrollbar-thumb-white scrollbar-track-blue-900`;
  const dialogueStyling = `${scrollBarStyling}  bg-white z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-8 pr-8 pt-2 rounded-xl border border-blue-300 shadow-lg max-w-md w-full flex flex-col pb-8 min-h-[400px] max-h-[650px]`;
  const overlayStyling = `fixed bg-blue-100 bg-opacity-90 inset-0 border z-10 flex justify-center items-center`;
  const textAreaStyling = `shadow-sm border border-blue-800 placeholder-blue-900 text-blue-900 text-sm font-semibold border border-blue-500 w-full p-2 rounded focus:border-2 border-blue-500 outline-none`;
  const buttonStyling = `${
    taskName === "" || taskName.length > 84 ? "hidden" : ""
  } bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded w-full hover:bg-blue-900`;
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
          <form className="w-full space-y-4">
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
                {taskName === "" || onSubmitNameIssueMessage
                  ? "Please enter a task name"
                  : taskName.length > 84 || onSubmitNameIssueMessage
                  ? "Task name is too long"
                  : ""}
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
              <div className="space-y-1">
                <AllPurposeLabel inputId="taskStartDate">Start Date</AllPurposeLabel>
                <AllPurposeInput
                  inputValue={taskStartDate}
                  inputType="date"
                  inputName="taskStartDate"
                  styling=""
                  onchangeFunction={handleFormData}
                />
              </div>
              <div className="space-y-1">
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
              <div className="space-y-1">
                <AllPurposeLabel inputId="taskStartTime">Start Time</AllPurposeLabel>
                <AllPurposeInput
                  inputValue={taskStartTime}
                  inputType="time"
                  inputName="taskStartTime"
                  styling=""
                  onchangeFunction={handleFormData}
                />
              </div>
              <div className="space-y-1">
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

            <select
              id="taskStatusDropdown"
              value={taskStatus}
              name="taskStatus"
              onChange={handleFormData}
              className={textAreaStyling}
            >
              <option value="" disabled className={optionStyling}>
                Select Task Status
              </option>
              <option value="In Progress" className={optionStyling}>
                In Progress
              </option>
              <option value="Completed" className={optionStyling}>
                Completed
              </option>
              <option value="Terminated" className={optionStyling}>
                Terminated
              </option>
            </select>
            <AllPurposeLabel labelStyling={validationStyling}>
              {taskStatus === "" || onSubmitEmptyStatusMessage ? "Please select a task status" : ""}
            </AllPurposeLabel>

            <button type="submit" className={buttonStyling} onClick={handleAddTask}>
              Add Task
            </button>
          </form>
        </AllPurposeContainer>
      </div>
    )
  );
};
export default NewTaskDialog;
