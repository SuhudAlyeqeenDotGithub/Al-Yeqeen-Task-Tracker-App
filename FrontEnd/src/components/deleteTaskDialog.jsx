import { useSelector, useDispatch } from "react-redux";
import {
  setDeleteTaskDialogIsOpen,
  setDeleteTaskFromView,
  setViewTaskDialogIsOpen,
} from "../reduxFeatures/dialogSlice";
import { useState } from "react";
import AllPurposeContainer from "./AllPurposeContainer";
import {
  disableScroll,
  enableScroll,
} from "../UtilityFunctions/UtilityFunctions";
import { RegularParagraph } from "./ShortComponents";

const DeleteTaskDialog = ({ tasksToDelete }) => {
  const { deleteTaskDialogIsOpen, viewTaskDialogIsOpen } = useSelector(
    (state) => state.dialog
  );

  const dispatch = useDispatch();

  function closeDialog() {
    if (deleteTaskDialogIsOpen) {
      dispatch(setDeleteTaskDialogIsOpen(false));
      dispatch(setDeleteTaskFromView(false));
      enableScroll();
    }
  }

  function cancelDelete() {
    closeDialog();
  }

  function deleteTasks() {
    alert(
      `You have just deleted some tasks ... ${JSON.stringify(tasksToDelete)}`
    );
    closeDialog();

    if (viewTaskDialogIsOpen) {
      dispatch(setViewTaskDialogIsOpen(false));
    }
  }

  const tasksToDisplay = tasksToDelete.map((task) => {
    return task.split("||")[0];
  });

  const fourTaskToDisplay = tasksToDisplay.slice(0, 4).join(", ");

  const [seeMoreIsClicked, setSeeMoreIsClicked] = useState(false);
  const [seeLessIsClicked, setSeeLessIsClicked] = useState(true);
  const [taskLengthToDisplay, setTaskLengthToDisplay] =
    useState(fourTaskToDisplay);

  const handleSeeMore = () => {
    setSeeMoreIsClicked(true);
    setSeeLessIsClicked(false);
    setTaskLengthToDisplay(tasksToDisplay.join(", "));
  };

  const handleSeeLess = () => {
    setSeeMoreIsClicked(false);
    setSeeLessIsClicked(true);
    setTaskLengthToDisplay(fourTaskToDisplay);
  };

  const scrollBarStyling = `overflow-auto scrollbar scrollbar-thumb-white scrollbar-track-blue-900`;

  const dialogueStyling = ` ${scrollBarStyling} bg-white z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl border border-blue-300 shadow-lg max-w-md w-full flex flex-wrap justify-center items-center min-h-[200px] max-h-[400px] gap-1`;
  const overlayStyling = `fixed bg-blue-100 bg-opacity-90 inset-0 border z-10 flex items-center`;
  const buttonStyling = `justify-center w-20 border border-blue-900 shadow text-blue-900 text-md font-semibold p-2 rounded-lg`;

  const seeMoreSeeLessStyling = "text-sm text-blue-900 font-semibold";

  return (
    deleteTaskDialogIsOpen && (
      <>
        <div className={overlayStyling}></div>
        <AllPurposeContainer containerStyling={dialogueStyling}>
          <RegularParagraph styling="text-blue-900 font-bold text-xl w-full text-center mb-5">
            Head Ups !
          </RegularParagraph>
          <RegularParagraph styling="text-md text-blue-900 font-semibold">
            Are you sure you want to delete the below task(s)?
          </RegularParagraph>

          <div
            className={`${scrollBarStyling} w-full ml-5 mr-5 border border-blue-900 p-2 flex flex-wrap rounded-md mt-5 max-h-[200px]`}
          >
            <RegularParagraph>{taskLengthToDisplay}</RegularParagraph>

            <div className="w-full">
              {seeLessIsClicked ? (
                <button
                  className={seeMoreSeeLessStyling}
                  onClick={handleSeeMore}
                >
                  {" "}
                  See More...
                </button>
              ) : (
                <button
                  className={seeMoreSeeLessStyling}
                  onClick={handleSeeLess}
                >
                  {" "}
                  See Less...
                </button>
              )}
            </div>
          </div>

          <div className="w-full flex flex-row justify-center gap-x-10 mt-5">
            <button
              onClick={deleteTasks}
              className={`hover:text-white hover:bg-red-500 hover:border-none ${buttonStyling}`}
            >
              Delete
            </button>
            <button
              onClick={cancelDelete}
              className={`hover:text-white hover:bg-blue-900 hover:border-none ${buttonStyling}`}
            >
              Cancel
            </button>
          </div>
        </AllPurposeContainer>
      </>
    )
  );
};

export default DeleteTaskDialog;
