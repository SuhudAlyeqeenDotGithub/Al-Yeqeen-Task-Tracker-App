import AllPurposeCheckBox from "../components/AllPurposeCheckBox";
import { editIcon, deleteIcon, addIcon } from "../components/icons";
import { useContext, useEffect, useState } from "react";
import NewTaskDialog from "../components/NewTaskDialog";
import ViewTaskDialog from "../components/ViewTaskDialog";
import EditTaskDialog from "../components/EditTaskDialog";
import { TaskDialogContext } from "../contexts/TaskContext";
import { disableScroll } from "../UtilityFunctions/UtilityFunctions";
import DeleteTaskDialog from "../components/deleteTaskDialog";

function TasksPage() {
  const taskContainerStyle =
    "cursor-pointer gap-2 text-blue-900 font-semibold p-2 rounded-md bg-white border border-blue-800  shadow-sm mb-2 mr-2 flex flex-wrap w-2/5 max-w-2/4 min-w-96 items-center justify-center hover:bg-blue-50";
  const regularButtonStyle = `cursor-pointer text-blue-900 font-semibold shadow-sm p-2 pr-4 pl-4 mt-2 rounded-md border border-blue-800  row-span-2 flex items-center justify-center hover:bg-blue-800  hover:text-white hover:border-none gap-2`;
  const tasksData = Array.from({ length: 100 }, (item, i) => {
    return {
      taskId: i,
      taskName: `Task Name ${i}`,
      taskStatus: `Task Status ${i}`,
      taskDescription: `Task ${i}: This task involves implementing a feature that dynamically generates descriptions for items based on their unique ID (${i}). The purpose of this task is to ensure that each task is identifiable and references its own ID (${i}) within the description text for clarity and tracking.`,
      taskStartDate: `Task StartDate ${i}`,
      taskDueDate: `Task EndDate ${i}`,
      taskStartTime: `Task StartTime ${i}`,
      taskDueTime: `Task EndTime ${i}`,
    };
  });

  const [selectAllCheckStatus, setSelectAllCheckBoxStatus] = useState(false);
  const [regularCheckBoxStatus, setRegularCheckBoxStatus] = useState(
    Array(tasksData.length).fill(false)
  );
  const [countCheckedBoxes, setCountCheckedBoxes] = useState(0);

  const {
    newTaskDialogIsOpen,
    setNewTaskDialogIsOpen,
    viewTaskDialogIsOpen,
    setViewTaskDialogIsOpen,
    editTaskDialogIsOpen,
    setEditTaskDialogIsOpen,
    editTaskDialogFromViewIsOpen,
    setEditDialogTaskFromViewIsOpen,
    viewTaskDataToExport,
    setViewTaskDataToExport,
    deleteTaskDialogIsOpen,
    setDeleteTaskDialogIsOpen,
    deleteTaskFromView,
    setDeleteTaskFromView,
  } = useContext(TaskDialogContext);

  const oneOrMoreRegBoxIsTrue = regularCheckBoxStatus.some(
    (checkStatus) => checkStatus === true
  );
  const onlyOneCheckIsTrue =
    regularCheckBoxStatus.filter((checkStatus) => checkStatus === true)
      .length === 1;

  const handleRegularCheckBoxOnchange = (event, index) => {
    event.stopPropagation();
    const updatedStatuses = [...regularCheckBoxStatus];
    updatedStatuses[index] = !updatedStatuses[index];
    setRegularCheckBoxStatus(updatedStatuses);
  };

  const handleSelectAllCheck = () => {
    setSelectAllCheckBoxStatus(!selectAllCheckStatus);
    setRegularCheckBoxStatus(
      Array(tasksData.length).fill(!selectAllCheckStatus)
    );
  };

  const [viewTaskData, setViewTaskData] = useState({});
  const [editTaskData, setEditTaskData] = useState({});

  const showViewTaskDialog = (taskData) => {
    if (viewTaskDialogIsOpen === false) {
      setViewTaskData(taskData);
      setViewTaskDialogIsOpen(true);
      disableScroll();
    }
  };

  const showEditTaskDialog = (event, taskObj) => {
    event.stopPropagation();
    if (editTaskDialogIsOpen === false) {
      setEditTaskData(taskObj);
      setEditTaskDialogIsOpen(true);
      disableScroll();
    }
  };

  const showNewTaskDialog = () => {
    if (newTaskDialogIsOpen === false) {
      setNewTaskDialogIsOpen(true);
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
      setEditTaskDialogIsOpen(true);
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
      setDeleteTaskDialogIsOpen(true);
      disableScroll();
    }
  };

  const tasks = tasksData.map((taskObj, index) => {
    const { taskName, taskStartDate, taskStartTime, taskStatus } = taskObj;
    return (
      <div
        key={index}
        onClick={() => {
          showViewTaskDialog(taskObj);
        }}
        className={taskContainerStyle}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="row-span-2 flex basis-1/10 mr-4 items-center justify-self-center"
        >
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

        <div className="basis-3/4 flex flex-wrap justify-center items-center space-y-5 max-w-full">
          <div className="flex max-w-full">
            <p className="mr-10 max-w-full">Task Name {taskName}</p>
            <p>Task Status: {taskStatus}</p>
          </div>

          <div className="flex max-w-full">
            <p className="mr-10 max-w-full">Start Date: {taskStartDate}</p>
            <p>Start Time: {taskStartTime}</p>
          </div>
        </div>

        <button
          title="edit"
          className="ml-4 hover:text-white hover:bg-blue-900 text-xl p-2 rounded-lg justify-center items-center"
          onClick={(event) => showEditTaskDialog(event, taskObj)}
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
    const checkedBoxes = regularCheckBoxStatus.filter(
      (status) => status === true
    ).length;
    setCountCheckedBoxes(checkedBoxes);
  }, [regularCheckBoxStatus]);

  return (
    <div className="">
      {newTaskDialogIsOpen && <NewTaskDialog />}
      {editTaskDialogIsOpen && (
        <EditTaskDialog
          taskData={
            editTaskDialogFromViewIsOpen && editTaskDialogIsOpen
              ? viewTaskDataToExport
              : editTaskData
          }
        />
      )}
      {viewTaskDialogIsOpen && <ViewTaskDialog taskData={viewTaskData} />}
      {deleteTaskDialogIsOpen && !deleteTaskFromView && (
        <DeleteTaskDialog tasksToDelete={tasksToDelete} />
      )}
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
          <p>
            {oneOrMoreRegBoxIsTrue && `${countCheckedBoxes} Tasks Selected`}
          </p>
        </div>

        <div className="pl-10 grow flex flex-wrap space-x-10 mr-10 w-1/2 justify-center">
          <button
            title="delete"
            className={deleteButtonStyle}
            onClick={handleDeleteFromNav}
          >
            Delete {deleteIcon}
          </button>
          <button
            title="edit"
            className={editButtonStyle}
            onClick={handleEditTaskFromNavButton}
          >
            Edit {editIcon}
          </button>
        </div>

        <button
          onClick={showNewTaskDialog}
          title="Add Task"
          className="text-blue-900 font-semibold shadow-sm p-2 pr-4 pl-4 mt-2 rounded-md border border-blue-800   hover:bg-blue-800  hover:text-white hover:border-none"
        >
          Add Task {addIcon}
        </button>
      </div>

      <div className=" mt-4 flex flex-wrap justify-center items-center">
        {tasks}
      </div>
    </div>
  );
}

export default TasksPage;
