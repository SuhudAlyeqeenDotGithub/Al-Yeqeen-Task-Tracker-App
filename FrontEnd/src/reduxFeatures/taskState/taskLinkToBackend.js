import axios from "axios";

const updateLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getDataFromLocalStorage = (key, defaultVal) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultVal;
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
    headers: { authorization: "Bearer " + token }
  };
  return header;
};

const getTasksRequest = async () => {
  const header = getHeader();
  try {
    const response = await axios.get(taskUri, header);
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("user"); // Clear invalid user data
      window.location.href = "/login"; // Redirect to login
    }
    throw new Error(error.response?.data?.message || "An error occurred while fetching tasks.");
  }
};

const addTaskRequest = async (taskToAdd) => {
  const header = getHeader();
  try {
    console.log("Adding tasks", taskToAdd);
    const response = await axios.post(taskUri, taskToAdd, header);
    console.log("getting tasks", response);
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("user"); // Clear invalid user data
      window.location.href = "/login"; // Redirect to login
    }
    throw new Error(error.response?.data?.message);
  }
};

const deleteTasksRequest = async (tasksToDelete) => {
  const header = getHeader();
  try {
    const response = await axios.delete(taskUri, {
      ...header,
      data: tasksToDelete
    });
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("user"); // Clear invalid user data
      window.location.href = "/login"; // Redirect to login
    }
    throw new Error(error.response?.data?.message);
  }
};

const editTaskRequest = async (updatedTask) => {
  const header = getHeader();
  try {
    const response = await axios.put(taskUri, updatedTask, header);
    return getUpdatedTaskAndUpdateLocalStorage(response);
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("user"); // Clear invalid user data
      window.location.href = "/login"; // Redirect to login
    }
    throw new Error(error.response?.data?.message);
  }
};

export {
  getTasksRequest,
  addTaskRequest,
  deleteTasksRequest,
  editTaskRequest,
  updateLocalStorage,
  getDataFromLocalStorage
};
