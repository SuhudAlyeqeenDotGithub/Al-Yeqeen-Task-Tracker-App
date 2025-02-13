import { useEffect } from "react";

const [filterSortStore, setFilterSortStore] = useState([]);

const processedSortedData = useMemo(() => {
  const dataToSort = filterOption === "" ? [...tasksData] : filterSortStore;

  if (sortOption === "Oldest Start Date") {
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
}, [filterInputs, tasksData]);

const filteredSortedData = useMemo(() => {
  const dataToFilter = sortOption === "" ? taskData : filterSortStore;

  return dataToFilter.filter((task) => task.taskStatus === filterOption);
}, [filterInputs, tasksData]);

useEffect(() => {
  setFilterSortStore(filteredSortedData);
}, [filteredSortedData]);

useEffect(() => {
  setFilterSortStore(processedSortedData);
}, [processedSortedData]);
