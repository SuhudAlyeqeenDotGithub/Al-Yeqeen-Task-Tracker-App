import axios from "axios";

const registerURI = "http://localhost:5000/api/users/register";
const loginURI = "http://localhost:5000/api/users/login";

const register = async (userData) => {
  try {
    const response = await axios.post(registerURI, userData);
    const user = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(loginURI, userData);
    const user = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export { register, login };
