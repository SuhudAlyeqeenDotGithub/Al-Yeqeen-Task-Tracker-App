import { useSelector, useDispatch } from "react-redux";
import { getTasks, addTask, deleteTasks, editTask } from "../reduxFeatures/taskState/taskThunk";
import { resetTasks } from "../reduxFeatures/taskState/taskSlice";
import {
  setNewTaskDialogIsOpen,
  setViewTaskDialogIsOpen,
  setEditTaskDialogIsOpen,
  setEditDialogTaskFromViewIsOpen,
  setViewTaskDataToExport,
  setDeleteTaskDialogIsOpen,
  setDeleteTaskFromView
} from "../reduxFeatures/dialogSlice";

import AllPurposeCheckBox from "../components/AllPurposeCheckBox";
import { editIcon, deleteIcon, addIcon } from "../components/icons";
import { useState, useEffect } from "react";
import NewTaskDialog from "../components/NewTaskDialog";
import ViewTaskDialog from "../components/ViewTaskDialog";
import EditTaskDialog from "../components/EditTaskDialog";
import { useLocation } from "react-router-dom";
import { disableScroll, formatDate, formatDateToDefault } from "../UtilityFunctions/UtilityFunctions";
import DeleteTaskDialog from "../components/deleteTaskDialog";
import AllPurposeLabel from "../components/AllPurposeLabel";
import { TaskStatusChip } from "../components/ShortComponents";

function TasksPage() {
  const {
    newTaskDialogIsOpen,
    viewTaskDialogIsOpen,
    editTaskDialogIsOpen,
    editTaskDialogFromViewIsOpen,
    viewTaskDataToExport,
    deleteTaskDialogIsOpen,
    deleteTaskFromView
  } = useSelector((state) => state.dialog);

  const { tasks: tasksData, isSuccess, isLoading, isError, errorMessage } = useSelector((state) => state.task);

  const location = useLocation();

  useEffect(() => {
    try {
      dispatch(resetTasks());
      dispatch(getTasks());
    } catch (error) {}
  }, [location]);

  const { userId, userName, userToken } = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();


  const taskContainerStyle =
    "cursor-pointer gap-2 text-blue-900 font-semibold p-2 bg-white border border-blue-800 shadow-sm mb-1 rounded mr-2 ml-2 flex flex-row w-full max-w-[600px] min-w-[400px] items-center justify-between hover:bg-blue-50";
  const regularButtonStyle = `cursor-pointer text-blue-900 font-semibold shadow-sm p-2 pr-4 pl-4 mt-2 rounded-md border border-blue-800  row-span-2 flex items-center justify-center hover:bg-blue-800  hover:text-white hover:border-none gap-2`;

  const [selectAllCheckStatus, setSelectAllCheckBoxStatus] = useState(false);
  const [regularCheckBoxStatus, setRegularCheckBoxStatus] = useState(Array(tasksData.length).fill(false));
  const [countCheckedBoxes, setCountCheckedBoxes] = useState(0);

  const oneOrMoreRegBoxIsTrue = regularCheckBoxStatus.some((checkStatus) => checkStatus === true);
  const onlyOneCheckIsTrue = regularCheckBoxStatus.filter((checkStatus) => checkStatus === true).length === 1;

  const handleRegularCheckBoxOnchange = (event, index) => {
    event.stopPropagation();
    const updatedStatuses = [...regularCheckBoxStatus];
    updatedStatuses[index] = !updatedStatuses[index];
    setRegularCheckBoxStatus(updatedStatuses);
  };

  const noTaskMessage = (
    <div className="flex flex-wrap justify-center ml-6 mr-6">
      <AllPurposeLabel>Hi {userName}😊, You have no task yet. Let's start adding tasks</AllPurposeLabel>
    </div>
  );
  const handleSelectAllCheck = () => {
    setSelectAllCheckBoxStatus(!selectAllCheckStatus);
    setRegularCheckBoxStatus(Array(tasksData.length).fill(!selectAllCheckStatus));
  };

  const [viewTaskData, setViewTaskData] = useState({});
  const [editTaskData, setEditTaskData] = useState({});

  const showViewTaskDialog = (taskData) => {
    if (viewTaskDialogIsOpen === false) {
      setViewTaskData(taskData);
      dispatch(setViewTaskDialogIsOpen(true));
      disableScroll();
    }
  };

  const showEditTaskDialog = (event, taskObj) => {
    event.stopPropagation();
    if (editTaskDialogIsOpen === false) {
      setEditTaskData(taskObj);
      dispatch(setEditTaskDialogIsOpen(true));
      disableScroll();
    }
  };

  const showNewTaskDialog = () => {
    if (newTaskDialogIsOpen === false) {
      dispatch(setNewTaskDialogIsOpen(true));
      disableScroll();
    }
  };

  const handleEditTaskFromNavButton = () => {
    if (onlyOneCheckIsTrue) {
      const taskToEdit = regularCheckBoxStatus.indexOf(true);
      setEditTaskData(
        tasksData.find((taskData) => {
          return taskData.taskId === taskToEdit;
        })
      );
      dispatch(setEditTaskDialogIsOpen(true));
    }
  };

  const [tasksToDelete, setTasksToDelete] = useState([]);

  const handleDeleteFromNav = () => {
    if (oneOrMoreRegBoxIsTrue) {
      const tasksToDeleteLookUp = regularCheckBoxStatus
        .map((checkedBox, index) => {
          if (checkedBox === true) {
            const foundTask = tasksData.find((task) => task.taskId === index);

            if (foundTask) {
              return `Task Id: ${index} || Task Name: ${foundTask.taskName}`;
            } else {
              return null; // Return null if the task isn't found
            }
          }
          return null; // Return null for unchecked checkboxes
        })
        .filter((task) => task !== null); // Remove null values from the array

      setTasksToDelete(tasksToDeleteLookUp);
      dispatch(setDeleteTaskDialogIsOpen(true));
      disableScroll();
    }
  };

  const tasksToDisplay = tasksData.map((rawtaskObj, index) => {
    const taskObjForDisplay = {
      ...rawtaskObj,
      taskStartDate: formatDate(rawtaskObj.taskStartDate),
      taskDueDate: formatDate(rawtaskObj.taskDueDate)
    };

    const taskObjForEdit = {
      ...rawtaskObj,
      taskStartDate: formatDateToDefault(rawtaskObj.taskStartDate),
      taskDueDate: formatDateToDefault(rawtaskObj.taskDueDate)
    };

    const todayDate = formatDateToDefault(new Date());

    const { taskName, taskStartDate, taskStartTime, taskStatus } = taskObjForDisplay;

    return (
      <div
        key={index}
        onClick={() => {
          showViewTaskDialog(taskObjForDisplay);
        }}
        className={taskContainerStyle}
      >
        <div className="mr-2">
          <div
            className={`${
              taskObjForEdit.taskDueDate < todayDate && taskStatus !== "Completed" ? "bg-red-600" : "bg-green-600"
            } w-3 h-3 rounded-full justify-center`}
          ></div>
        </div>

        <div onClick={(event) => event.stopPropagation()} className="flex flex-col mr-4">
          <AllPurposeCheckBox
            inputId={index}
            inputName={index}
            inputValue={index}
            onchangeFunction={handleRegularCheckBoxOnchange}
            checked={regularCheckBoxStatus[index]}
            isRegularCheckbox={true}
            index={index}
          />
        </div>

        <div className="w-full flex flex-col">
          <div className=" basis-3/4 flex flex-row items-center justify-between max-w-full">
            <div className="max-w-[300px] w-full">{taskName}</div>
            <div className="max-w-md">
              <TaskStatusChip>{taskStatus}</TaskStatusChip>
            </div>
          </div>
        </div>

        <button
          title="edit"
          className="ml-4 hover:text-white hover:bg-blue-900 text-xl p-2 rounded-lg justify-center items-center"
          onClick={(event) => showEditTaskDialog(event, taskObjForEdit)}
        >
          {editIcon}
        </button>
      </div>
    );
  });

  const deleteButtonShowLogic = oneOrMoreRegBoxIsTrue ? "" : "hidden";
  const topEditButtonLogic = onlyOneCheckIsTrue ? "" : "hidden";
  const deleteButtonStyle = `${regularButtonStyle} ${deleteButtonShowLogic}`;
  const editButtonStyle = `${regularButtonStyle} ${topEditButtonLogic}`;

  useEffect(() => {
    const checkedBoxes = regularCheckBoxStatus.filter((status) => status === true).length;
    setCountCheckedBoxes(checkedBoxes);
  }, [regularCheckBoxStatus]);

  return (
    <div>
      <h1 className="text-blue-900 font-semibold flex flex-wrap justify-center text-2xl mb-6 mt-6 ml-6 ">
        Hello {userName}, Let's add some tasks and complete some
      </h1>

      {newTaskDialogIsOpen && <NewTaskDialog />}
      {editTaskDialogIsOpen && (
        <EditTaskDialog
          taskData={editTaskDialogFromViewIsOpen && editTaskDialogIsOpen ? viewTaskDataToExport : editTaskData}
        />
      )}
      {viewTaskDialogIsOpen && <ViewTaskDialog taskData={viewTaskData} />}
      {deleteTaskDialogIsOpen && !deleteTaskFromView && <DeleteTaskDialog tasksToDelete={tasksToDelete} />}
      <div className=" sticky top-52 bg-white shadow-sm border border-blue-800  p-4 rounded flex flex-wrap items-center w-4/5 justify-self-center">
        <div className="row-span-2 flex ml-10 items-center justify-self-center">
          <AllPurposeCheckBox
            inputId="selectAll"
            inputName="selectAll"
            inputValue="selectAll"
            onchangeFunction={handleSelectAllCheck}
            checked={selectAllCheckStatus}
            isRegularCheckbox={false}
          />
        </div>

        <div className="row-span-2 text-blue-900 font-semibold flex ml-10 items-center justify-self-center">
          <p>{oneOrMoreRegBoxIsTrue && `${countCheckedBoxes} Tasks Selected`}</p>
        </div>

        <div className="pl-10 grow flex flex-wrap space-x-10 mr-10 w-1/2 justify-center">
          <button title="delete" className={deleteButtonStyle} onClick={handleDeleteFromNav}>
            Delete {deleteIcon}
          </button>
          <button title="edit" className={editButtonStyle} onClick={handleEditTaskFromNavButton}>
            Edit {editIcon}
          </button>
        </div>

        <button
          onClick={showNewTaskDialog}
          title="Add Task"
          className="text-blue-900 font-semibold shadow-sm p-2 pr-4 pl-4 mt-2 rounded-md border border-blue-800 hover:bg-blue-800  hover:text-white hover:border-none"
        >
          Add Task {addIcon}
        </button>
      </div>

      <div className=" mt-4 flex flex-wrap justify-center items-center">
        {tasksData.length < 1 ? noTaskMessage : tasksToDisplay}
      </div>
    </div>
  );
}

export default TasksPage;
