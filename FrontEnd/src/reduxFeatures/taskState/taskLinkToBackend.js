import axios from "axios";

const updateLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const getUpdatedTaskAndUpdateLocalStorage = (response) => {
  const tasks = response.data.userTasks;
  updateLocalStorage("tasks", tasks);
  return tasks;
};

const taskUri = "http://localhost:5000/api/tasks";

const getHeader = () => {
  const user = getDataFromLocalStorage("user");
  const token = user ? user.userToken : null;
  const header = {
    headers: { authorization: "Bearer " + token },
  };
  return header;
};

const getTasksRequest = async () => {
  const header = getHeader();
  try {
    const response = await axios.get(taskUri, header);
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

const addTaskRequest = async (taskToAdd) => {
  const header = getHeader();
  try {
    const response = await axios.post(taskUri, taskToAdd, header);
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

const deleteTasksRequest = async (tasksToDelete) => {
  const header = getHeader();
  try {
    const response = await axios.delete(taskUri, {
      ...header,
      data: tasksToDelete,
    });
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

const editTaskRequest = async (updatedTask) => {
  const header = getHeader();
  try {
    const response = await axios.put(taskUri, updatedTask, header);
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

export { getTasksRequest, addTaskRequest, deleteTasksRequest, editTaskRequest, updateLocalStorage, getDataFromLocalStorage };
