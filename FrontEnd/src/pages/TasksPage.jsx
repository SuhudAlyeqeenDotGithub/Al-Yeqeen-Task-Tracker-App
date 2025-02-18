import { useSelector, useDispatch } from "react-redux";
import {
  getTasks,
  addTask,
  deleteTasks,
  editTask,
} from "../reduxFeatures/taskState/taskThunk";
import { FaSearch, FaTimes } from "react-icons/fa";
import {
  setNewTaskDialogIsOpen,
  setViewTaskDialogIsOpen,
  setEditTaskDialogIsOpen,
  setEditDialogTaskFromViewIsOpen,
  setViewTaskDataToExport,
  setDeleteTaskDialogIsOpen,
  setDeleteTaskFromView,
  // setRegularCheckBoxStatus
} from "../reduxFeatures/dialogSlice";

import AllPurposeCheckBox from "../components/AllPurposeCheckBox";
import { editIcon, deleteIcon, addIcon } from "../components/icons";
import { useState, useEffect, useMemo } from "react";
import NewTaskDialog from "../components/NewTaskDialog";
import ViewTaskDialog from "../components/ViewTaskDialog";
import EditTaskDialog from "../components/EditTaskDialog";
import { useLocation } from "react-router-dom";
import {
  disableScroll,
  formatDate,
  formatDateToDefault,
} from "../UtilityFunctions/UtilityFunctions";
import DeleteTaskDialog from "../components/deleteTaskDialog";
import AllPurposeLabel from "../components/AllPurposeLabel";
import { TaskStatusChip } from "../components/ShortComponents";
import AllPurposeInput from "../components/allPurposeInput";

function TasksPage() {
  const {
    newTaskDialogIsOpen,
    viewTaskDialogIsOpen,
    editTaskDialogIsOpen,
    editTaskDialogFromViewIsOpen,
    viewTaskDataToExport,
    deleteTaskDialogIsOpen,
    deleteTaskFromView,
    // regularCheckBoxStatus
  } = useSelector((state) => state.dialog);

  const dispatch = useDispatch();

  const { userId, userName, userToken } = JSON.parse(
    localStorage.getItem("user")
  );
  const {
    tasks: tasksData,
    isSuccess,
    isLoading,
    isError,
    errorMessage,
  } = useSelector((state) => state.task);

  // fetchses the latest tasks every time the location or path is loaded/refreshed
  const location = useLocation();
  useEffect(() => {
    try {
      dispatch(getTasks());
    } catch (error) {}
  }, [location]);

  const taskContainerStyle =
    "cursor-pointer gap-2 text-[#0B1869] font-semibold p-2 bg-white border-b border-t border-[#0B1869] shadow-sm shadow-[#0B1869] mb-1 rounded mr-1 ml-1 flex flex-row w-full max-w-[600px] min-w-[400px] items-center justify-between hover:bg-blue-50";
  const regularButtonStyle = `cursor-pointer text-[#0B1869] font-semibold shadow-sm p-2 pr-4 pl-4 mt-2 rounded-md border border-[#0B1869]  row-span-2 flex items-center justify-center hover:bg-[#0B1869]  hover:text-white hover:border-none gap-2`;

  const [filterInputs, setFilterInputs] = useState({
    sortOption: "",
    filterOption: "",
    searchTaskInput: "",
  });

  const { sortOption, filterOption, searchTaskInput } = filterInputs;
  const [filterDates, setFilterDates] = useState({
    filterStartDate: "",
    filterEndDate: "",
  });
  const { filterStartDate, filterEndDate } = filterDates;

  const handleFilterInputs = (e) => {
    setFilterInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [filterSortStore, setFilterSortStore] = useState([...tasksData]);
  const [clearFilterMessage, setClearFilterMessage] = useState(false);

  const proccessedFilteredData = useMemo(() => {
    if (filterOption === "") {
      setClearFilterMessage(false);
      return tasksData;
    }

    const dataToFilterAfterFilter =
      filterSortStore.length !== tasksData.length ? tasksData : filterSortStore;
    return dataToFilterAfterFilter.filter(
      (task) => task.taskStatus === filterOption
    );
  }, [filterOption, tasksData]);

  useEffect(() => {
    setFilterSortStore(proccessedFilteredData);
  }, [proccessedFilteredData]);

  const processedSortedData = useMemo(() => {
    const dataToSort = filterOption === "" ? [...tasksData] : filterSortStore;

    if (sortOption === "") {
      setClearFilterMessage(false);
      return dataToSort;
    } else if (sortOption === "Oldest Start Date") {
      const result = [...dataToSort].sort(
        (a, b) => new Date(a.taskStartDate) - new Date(b.taskStartDate)
      );
      return result;
    } else if (sortOption === "Newest Start Date") {
      const result = [...dataToSort].sort(
        (a, b) => new Date(b.taskStartDate) - new Date(a.taskStartDate)
      );
      return result;
    } else if (sortOption === "Oldest Due Date") {
      const result = [...dataToSort].sort(
        (a, b) => new Date(a.taskDueDate) - new Date(b.taskDueDate)
      );
      return result;
    } else if (sortOption === "Newest Due Date") {
      const result = [...dataToSort].sort(
        (a, b) => new Date(b.taskDueDate) - new Date(a.taskDueDate)
      );
      return result;
    }
  }, [sortOption, tasksData]);

  useEffect(() => {
    setFilterSortStore(processedSortedData);
  }, [processedSortedData]);

  const processSearchData = useMemo(() => {
    if (searchTaskInput === "") {
      return tasksData;
    }

    const dataToSearchAfterSearch =
      filterSortStore.length !== tasksData.length ? tasksData : filterSortStore;

    return dataToSearchAfterSearch.filter((task) =>
      task.taskName.toLowerCase().includes(searchTaskInput.toLowerCase())
    );
  }, [searchTaskInput]);

  useEffect(() => {
    setFilterSortStore(processSearchData);
  }, [processSearchData]);

  // defines the state of the select all checkbox
  const [selectAllCheckStatus, setSelectAllCheckBoxStatus] = useState(false);

  // defines the initial status objects for each task
  const initialTaskStatuses = useMemo(
    () =>
      filterSortStore.map((task) => {
        return {
          [task._id]: { checked: false },
        };
      }),
    [filterSortStore]
  );
  //store the mapped status objects in a state

  const [regularCheckBoxStatusO, setRegularCheckBoxStatusO] =
    useState(initialTaskStatuses);

  // extracts the exact boolean statuses from the status objects as a flat array
  const extractedStatuses = useMemo(
    () =>
      regularCheckBoxStatusO
        .map((taskStatusObj) => {
          return Object.values(taskStatusObj).map((value) => value.checked);
        })
        .flat(),
    [regularCheckBoxStatusO]
  );
  // stores the extracted boolean statuses in a state
  // const [regularCheckBoxStatus, setRegularCheckBoxStatus] = useState(extractedStatuses);

  const oneOrMoreRegBoxIsTrue = extractedStatuses.some(
    (checkStatus) => checkStatus === true
  );
  const onlyOneCheckIsTrue =
    extractedStatuses.filter((checkStatus) => checkStatus === true).length ===
    1;

  const handleRegularCheckBoxOnchange = (event, taskId) => {
    event.stopPropagation();
    const updatedStatuses = [...regularCheckBoxStatusO];
    const index = updatedStatuses.findIndex(
      (statusOb) => Object.keys(statusOb)[0] === taskId
    );
    const taskStatus = updatedStatuses[index][taskId].checked;
    updatedStatuses[index] = { [taskId]: { checked: !taskStatus } };
    setRegularCheckBoxStatusO(updatedStatuses);
  };

  const noTaskMessText = `Hi ${userName}😊, You have no task yet. Let's start adding tasks`;
  const dateFilterText = `Please select a date range to filter tasks and click filter`;
  const noResultFoundText = `No result found for the filter or search`;

  const noTaskAllMessage =
    tasksData.length < 1
      ? noTaskMessText
      : filterOption === "Start Date Range" || filterOption === "Due Date Range"
      ? dateFilterText
      : filterSortStore.length < 1
      ? noResultFoundText
      : noTaskMessText;
  const noTaskMessage = (
    <div className="flex flex-wrap justify-center ml-6 mr-6">
      <AllPurposeLabel>{noTaskAllMessage}</AllPurposeLabel>
    </div>
  );
  const handleSelectAllCheck = () => {
    setSelectAllCheckBoxStatus(!selectAllCheckStatus);
    const updatedStatuses = Array.from(filterSortStore, (taskStatusObj) => ({
      [taskStatusObj._id]: { checked: !selectAllCheckStatus },
    }));

    setRegularCheckBoxStatusO(updatedStatuses);
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
      const taskToEditIndex = extractedStatuses.indexOf(true);
      const taskToEdit = filterSortStore.find((taskData, index) => {
        return index === taskToEditIndex;
      });
      const taskToEditForEditDialog = {
        ...taskToEdit,
        taskStartDate: formatDateToDefault(taskToEdit.taskStartDate),
        taskDueDate: formatDateToDefault(taskToEdit.taskDueDate),
      };
      setEditTaskData(taskToEditForEditDialog);
      dispatch(setEditTaskDialogIsOpen(true));
    }
  };

  const [tasksToDelete, setTasksToDelete] = useState([]);

  const handleDeleteFromNav = () => {
    if (oneOrMoreRegBoxIsTrue) {
      const tasksToDeleteLookUp = extractedStatuses
        .map((checkedBox, index) => {
          if (checkedBox === true) {
            const foundTask = filterSortStore.find(
              (task, taskIndex) => taskIndex === index
            );

            if (foundTask) {
              return foundTask;
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

  const clearSort = () => {
    setFilterInputs((prev) => ({ ...prev, sortOption: "" }));
  };
  const clearFilter = () => {
    setFilterInputs((prev) => ({ ...prev, filterOption: "" }));
  };
  const handleDateFilter = () => {
    const dataToFilter =
      filterSortStore.length !== tasksData.length ? tasksData : filterSortStore;

    if (filterOption === "Start Date Range") {
      const filteredDate = dataToFilter.filter(
        (task) =>
          new Date(task.taskStartDate) >= new Date(filterStartDate) &&
          new Date(task.taskStartDate) <= new Date(filterEndDate)
      );
      setFilterSortStore(filteredDate);
    } else if (filterOption === "Due Date Range") {
      const filteredDate = dataToFilter.filter(
        (task) =>
          new Date(task.taskDueDate) >= new Date(filterStartDate) &&
          new Date(task.taskDueDate) <= new Date(filterEndDate)
      );

      setFilterSortStore(filteredDate);
    }
  };

  const handleFilterDatesInput = (e) => {
    setFilterDates((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const filterSelectStyling =
    "font-semibold outline-none text-[#0B1869] rounded-md text-center border border-[#0B1869] p-2 text-sm focus:border-2 focus:border-2 shadow-sm shadow-blue-200";
  const searchInputStyling =
    "flex flex-row shadow-sm placeholder-[#0B1869] text-[#0B1869] rounded-lg border border-[#0B1869] text-sm font-semibold w-full p-2 shadow-sm shadow-blue-200 rounded focus:border-2 border-blue-[#0B1869] outline-none";
  const optionStyling = "font-semibold text-center";
  const clearFilterIconStyle =
    "text-[#0B1869] text-xl rounded-md hover:text-white hover:bg-[#0B1869]";
  const selectDivStyling = "flex flex-row space-x-2 items-center";

  const dateInputStyling =
    "shadow-sm text-[#0B1869] text-sm font-semibold border border-blue-900 text-center p-2 rounded focus:border-2 border-blue-900 outline-none";
  const filterByDateDialog = (
    <div className="gap-y-2 w-[200px] flex flex-col justify-center items-center border border-[#0B1869] rounded-md py-2 bg-blue-50 absolute bottom-1 left-60 z-40">
      <AllPurposeLabel>Tasks Between</AllPurposeLabel>
      <AllPurposeInput
        styling={dateInputStyling}
        inputType="date"
        inputPlaceHolder=""
        inputValue={filterStartDate}
        inputName="filterStartDate"
        onchangeFunction={handleFilterDatesInput}
      />
      <AllPurposeLabel>And</AllPurposeLabel>
      <AllPurposeInput
        styling={dateInputStyling}
        inputType="date"
        inputPlaceHolder=""
        inputValue={filterEndDate}
        inputName="filterEndDate"
        onchangeFunction={handleFilterDatesInput}
      />
      <div className="flex flex-row gap-x-2 mt-2">
        <button
          className="bg-[#0B1869] p-2 rounded-md text-white hover:bg-[#0B1869]"
          onClick={handleDateFilter}
        >
          Filter
        </button>
        <button
          className="bg-red-700 p-2 rounded-md text-white  hover:bg-red-800"
          onClick={clearFilter}
        >
          Cancel
        </button>{" "}
      </div>
    </div>
  );
  const filterNav = (
    <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-6 gap-2">
      <div className={selectDivStyling}>
        {sortOption !== "" ? (
          <FaTimes
            title="clear Sort"
            onClick={clearSort}
            className={clearFilterIconStyle}
          />
        ) : (
          ""
        )}
        <select
          className={filterSelectStyling}
          name="sortOption"
          value={sortOption}
          onChange={handleFilterInputs}
        >
          <option className={optionStyling} value="" disabled>
            Sort By
          </option>
          <option className={optionStyling} value="Oldest Start Date">
            Oldest Start Date
          </option>
          <option className={optionStyling} value="Newest Start Date">
            Newest Start Date
          </option>
          <option className={optionStyling} value="Oldest Due Date">
            Oldest Due Date
          </option>
          <option className={optionStyling} value="Newest Due Date">
            Newest Due Date
          </option>
        </select>
      </div>

      <div className={selectDivStyling}>
        {filterOption !== "" ? (
          <FaTimes
            title="clear Filter"
            onClick={clearFilter}
            className={clearFilterIconStyle}
          />
        ) : (
          ""
        )}

        <select
          className={filterSelectStyling}
          name="filterOption"
          value={filterOption}
          onChange={handleFilterInputs}
        >
          <option className={optionStyling} value="" disabled>
            Filter By
          </option>
          <option className={optionStyling} value="Completed">
            Completed
          </option>
          <option className={optionStyling} value="In Progress">
            In Progress
          </option>
          <option className={optionStyling} value="Terminated">
            Terminated
          </option>
          <option className={optionStyling} value="Start Date Range">
            Start Date Range
          </option>
          <option className={optionStyling} value="Due Date Range">
            Due Date Range
          </option>
        </select>
      </div>
      {filterOption === "Start Date Range" || filterOption === "Due Date Range"
        ? filterByDateDialog
        : ""}
    </div>
  );

  const tasksToDisplay = useMemo(
    () =>
      filterSortStore.map((rawtaskObj, index) => {
        const taskObjForEdit = {
          ...rawtaskObj,
          taskStartDate: formatDateToDefault(rawtaskObj.taskStartDate),
          taskDueDate: formatDateToDefault(rawtaskObj.taskDueDate),
        };

        const todayDate = formatDateToDefault(new Date());

        const {
          _id: taskId,
          taskName,
          taskStartDate,
          taskStartTime,
          taskStatus,
          taskDueDate,
        } = rawtaskObj;

        if (regularCheckBoxStatusO.length !== filterSortStore.length) {
          setRegularCheckBoxStatusO(initialTaskStatuses);
        }
        const statusArrayToUse =
          regularCheckBoxStatusO.length === filterSortStore.length
            ? regularCheckBoxStatusO
            : initialTaskStatuses;
        const taskCheckStatus = statusArrayToUse.find(
          (statusObj) => Object.keys(statusObj)[0] === taskId
        );

        return (
          <div
            key={taskId}
            onClick={() => {
              showViewTaskDialog(rawtaskObj);
            }}
            className={taskContainerStyle}
          >
            {/* <div>
              startDate: {formatDate(taskStartDate)} <hr /> endDate: {formatDate(taskDueDate)}
            </div> */}
            <div className="mr-2">
              <div
                className={`${
                  taskObjForEdit.taskDueDate < todayDate &&
                  taskStatus !== "Completed"
                    ? "bg-red-600"
                    : "bg-green-600"
                } w-3 h-3 rounded-full justify-center`}
              ></div>
            </div>
            <div
              onClick={(event) => event.stopPropagation()}
              className="flex flex-col mr-4"
            >
              <AllPurposeCheckBox
                inputId={taskId}
                inputName={taskId}
                inputValue={taskId}
                onchangeFunction={handleRegularCheckBoxOnchange}
                checked={taskCheckStatus[taskId].checked}
                isRegularCheckbox={true}
                checkBoxIdentity={taskId}
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
              className="ml-4 hover:text-white hover:bg-[#0B1869] text-xl p-2 rounded-lg justify-center items-center"
              onClick={(event) => showEditTaskDialog(event, taskObjForEdit)}
            >
              {editIcon}
            </button>
          </div>
        );
      }),
    [regularCheckBoxStatusO, filterSortStore, tasksData]
  );

  const deleteButtonShowLogic = oneOrMoreRegBoxIsTrue ? "" : "hidden";
  const topEditButtonLogic = onlyOneCheckIsTrue ? "" : "hidden";
  const deleteButtonStyle = `${regularButtonStyle} ${deleteButtonShowLogic}`;
  const editButtonStyle = `${regularButtonStyle} ${topEditButtonLogic}`;
  const loader = (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div className="w-10 h-10 border-4 border-[#0B1869] border-t-transparent rounded-full animate-spin"></div>
      <AllPurposeLabel>
        Please wait {userName} whilst we load your tasks.........
      </AllPurposeLabel>
    </div>
  );

  const [countCheckedBoxes, setCountCheckedBoxes] = useState(0);

  useEffect(() => {
    const checkedBoxes = extractedStatuses.filter(
      (status) => status === true
    ).length;
    setCountCheckedBoxes(checkedBoxes);
  }, [regularCheckBoxStatusO]);

  return (
    <div className="flex flex-col items-center justify-center">
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
      {/* top task controller */}

      <div className="sticky top-[164px] w-full flex flex-col items-center justify-center bg-white">
        <h1 className="text-[#0B1869] font-semibold flex flex-wrap justify-center text-2xl mb-6 mt-6 ml-6 ">
          Hello {userName}, Let's add some tasks and complete some
        </h1>
        <div className="bg-white border w-[50%] border-[#0B1869] shadow-sm shadow-[#0B1869] py-4 px-6 m-4 rounded-md flex flex-wrap space-y-4 justify-center items-center">
          <div className="flex flex-wrap md:flex-nowrap lg:w-full py-4 rounded-md gap-x-4 gap-y-2 items-center">
            {/* Filter Navigation */}

            {filterNav}

            {/* Search Input */}
            <div className="w-full sm:w-[70%] max-w-full flex flex-row items-center space-x-2">
              <FaSearch className="text-[#0B1869] text-3xl shrink-0" />
              <AllPurposeInput
                styling={searchInputStyling}
                inputType="input"
                inputPlaceHolder="Search Task Name ..."
                inputValue={searchTaskInput}
                inputName="searchTaskInput"
                onchangeFunction={handleFilterInputs}
              />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="flex items-center justify-self-center ">
              <AllPurposeCheckBox
                inputId="selectAll"
                inputName="selectAll"
                inputValue="selectAll"
                onchangeFunction={handleSelectAllCheck}
                checked={selectAllCheckStatus}
                isRegularCheckbox={false}
              />
            </div>

            <p className="row-span-2 text-[#0B1869] font-semibold w-[20%] flex ml-10 items-center">
              {oneOrMoreRegBoxIsTrue &&
                `${countCheckedBoxes} ${
                  countCheckedBoxes <= 1 ? "task" : "tasks"
                } Selected`}
            </p>

            <div className=" w-full flex flex-row space-x-10 justify-between">
              <div className="flex flex-row items-center w-[50%] space-x-4 justify-center">
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
                className="text-[#0B1869] font-semibold shadow-sm p-2 pr-4 pl-4 mt-2 rounded-md border border-[#0B1869] hover:bg-[#0B1869] hover:text-white hover:border-none"
              >
                Add Task {addIcon}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-cente p-4 gap-2">
        {isLoading
          ? loader
          : filterSortStore.length < 1
          ? noTaskMessage
          : tasksToDisplay}
      </div>
    </div>
  );
}

export default TasksPage;
