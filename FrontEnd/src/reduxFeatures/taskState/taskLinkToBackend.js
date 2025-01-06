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
const user = getDataFromLocalStorage("user");
const token = user?.userToken;
const header = {
  headers: { authorization: "Bearer " + token },
};

const getTasks = async () => {
  try {
    const response = await axios.get(taskUri, header);
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

const addTask = async (taskToAdd) => {
  try {
    const response = await axios.post(taskUri, taskToAdd, header);
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

const deleteTasks = async (tasksToDelete) => {
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

const editTask = async (updatedTask) => {
  try {
    const response = await axios.put(taskUri, updatedTask, header);
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

export { getTasks, addTask, deleteTasks, editTask, updateLocalStorage, getDataFromLocalStorage };
