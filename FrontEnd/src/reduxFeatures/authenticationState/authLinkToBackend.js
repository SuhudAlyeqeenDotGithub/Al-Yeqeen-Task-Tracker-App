import axios from "axios";

const registerURI = "api/users/register";
const loginURI = "api/users/login";

const register = async (userData) => {
  try {
    const { user } = await axios.post(registerURI, userData);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error; // You can choose to throw the error or handle it differently
  }
};

const login = async () => {};
export { register, login };
