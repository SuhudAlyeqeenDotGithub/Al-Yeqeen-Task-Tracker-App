import { useSelector, useDispatch } from "react-redux";
import {
  setViewTaskDialogIsOpen,
  setEditTaskDialogIsOpen,
  setEditDialogTaskFromViewIsOpen,
  setViewTaskDataToExport,
  setDeleteTaskDialogIsOpen,
  setDeleteTaskFromView,
} from "../reduxFeatures/dialogSlice";

import AllPurposeContainer from "./AllPurposeContainer";
import {
  disableScroll,
  enableScroll,
} from "../UtilityFunctions/UtilityFunctions";

import { editIcon, deleteIcon, closeIcon } from "./icons";
import { RegularParagraph, TaskStatusChip } from "./ShortComponents";
import EditTaskDialog from "./EditTaskDialog";
import DeleteTaskDialog from "./deleteTaskDialog";

const ViewTaskDialog = ({ taskData }) => {
  const {
    viewTaskDialogIsOpen,
    editTaskDialogIsOpen,
    editTaskDialogFromViewIsOpen,
    viewTaskDataToExport,
    deleteTaskDialogIsOpen,
    deleteTaskFromView,
  } = useSelector((state) => state.dialog);
  const dispatch = useDispatch();

  const {
    taskId,
    taskName,
    taskDescription,
    taskStartDate,
    taskDueDate,
    taskStartTime,
    taskDueTime,
    taskStatus,
  } = taskData || {};

  const handleCloseViewTask = () => {
    if (viewTaskDialogIsOpen === true) {
      dispatch(setViewTaskDialogIsOpen(false));
      enableScroll();
    }
  };

  const handleEditTaskFromView = () => {
    if (editTaskDialogIsOpen === false) {
      dispatch(setViewTaskDataToExport(taskData));
      dispatch(setEditTaskDialogIsOpen(true));
      dispatch(setEditDialogTaskFromViewIsOpen(true));
      dispatch(setViewTaskDialogIsOpen(false));
    }
  };

  const handleDeleteTaskFromView = () => {
    if (!deleteTaskDialogIsOpen && !deleteTaskFromView) {
      const dataNeededToDelete = [
        `Task Id: ${taskData.taskId} || Task Name: ${taskName}`,
      ];
      dispatch(setViewTaskDataToExport(dataNeededToDelete));
      dispatch(setDeleteTaskDialogIsOpen(true));

      dispatch(setDeleteTaskFromView(true));
    }
  };

  const scrollBarStyling = `overflow-auto scrollbar scrollbar-thumb-white scrollbar-track-blue-900`;

  const dialogueStyling = ` ${
    deleteTaskFromView ? "border-none bg-blue-100 bg-opacity-90" : "bg-white"
  } ${scrollBarStyling} pl-6 pr-6 pt-2 pb-8 z-40 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl border border-blue-300 shadow-lg max-w-md min-w-[400px] flex flex-wrap h-full min-h-[400] max-h-[600px]`;
  const overlayStyling = `fixed bg-blue-100 bg-opacity-90 inset-0 border z-10 flex items-center`;
  const buttonStyling = `justify-center text-blue-900 hover:text-white text-xl p-2 rounded-lg`;
  const gridStyling = `w-full flex flex-wrap gap-x-24`;

  return (
    viewTaskDialogIsOpen && (
      <>
        {editTaskDialogIsOpen && <EditTaskDialog taskData={taskData} />}
        {deleteTaskFromView && (
          <DeleteTaskDialog tasksToDelete={viewTaskDataToExport} />
        )}
        <div className={overlayStyling} onClick={handleCloseViewTask}></div>
        <AllPurposeContainer containerStyling={dialogueStyling}>
          <div className="flex flex-col gap-8">
            <header className="gap-2 mb-5">
              <div className="flex flex-row w-full items-center">
                <RegularParagraph styling="w-full pb-4 text-blue-900 text-xl font-bold">
                  Your Task Status
                </RegularParagraph>

                <div className="w-full flex flex-wrap justify-end gap-2 mb-5">
                  <button
                    title="delete"
                    className={`hover:bg-blue-900 ${buttonStyling}`}
                    onClick={handleDeleteTaskFromView}
                  >
                    {deleteIcon}
                  </button>
                  <button
                    title="edit"
                    className={`hover:bg-blue-900 ${buttonStyling}`}
                    onClick={handleEditTaskFromView}
                  >
                    {editIcon}
                  </button>
                  <button
                    title="close"
                    className={`hover:bg-red-500 ${buttonStyling}`}
                    onClick={handleCloseViewTask}
                  >
                    {closeIcon}
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-20 items-center w-full mt-2">
                <TaskStatusChip>{taskStatus}</TaskStatusChip>
                <RegularParagraph>Task Id: {taskId}</RegularParagraph>
              </div>
            </header>

            <div className={gridStyling}>
              <RegularParagraph>Task Name: {taskName}</RegularParagraph>
            </div>
            <div className="flex flex-wrap gap-3">
              <RegularParagraph>Task Description</RegularParagraph>
              <RegularParagraph
                styling={`${scrollBarStyling} overflow-auto text-sm max-h-[150px] text-blue-900 font-semibold border border-blue-900 shadow-inner shadow-gray-200 rounded-md p-4`}
              >
                {taskDescription}
              </RegularParagraph>
            </div>
            <div className="flex flex-wrap gap-6 w-full">
              <div className="flex flex-wrap gap-1">
                <div className={gridStyling}>
                  <RegularParagraph>Task Start Date</RegularParagraph>
                  <RegularParagraph>Task Due Date:</RegularParagraph>
                </div>
                <div className={gridStyling}>
                  <RegularParagraph>{taskStartDate}</RegularParagraph>
                  <RegularParagraph>{taskDueDate}</RegularParagraph>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                <div className={gridStyling}>
                  <RegularParagraph>Task Start Time</RegularParagraph>
                  <RegularParagraph>Task Due Time:</RegularParagraph>
                </div>
                <div className={gridStyling}>
                  <RegularParagraph>{taskStartTime}</RegularParagraph>
                  <RegularParagraph>{taskDueTime}</RegularParagraph>
                </div>
              </div>
            </div>
          </div>
        </AllPurposeContainer>
      </>
    )
  );
};

export default ViewTaskDialog;
