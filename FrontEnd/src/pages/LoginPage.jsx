import AllPurposeContainer from "../components/AllPurposeContainer";
import AllPurposeLabel from "../components/AllPurposeLabel";
import {ToDoLogo} from "../components/ToDoLogo";
import AllPurposeInput from "../components/allPurposeInput";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../reduxFeatures/authenticationState/authSlice";
import { loginUser } from "../reduxFeatures/authenticationState/authThunks";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromLocalStorage } from "../reduxFeatures/taskState/taskLinkToBackend";

const LoginPage = () => {
  // Background styling for the signup page
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, errorMessage } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ userEmail: "", userPassword: "" });
  const { userEmail, userPassword } = formData;



  const onchangeFunction = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const [hideSubmitBtn, setHideSubmitBtn] = useState(true);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [notRegistedEmail, setNotRegistedEmail] = useState(false);

  useEffect(() => {
    if (userEmail.includes("@") && userEmail.includes(".") && userPassword !== "") {
      setHideSubmitBtn(false);
    } else {
      setHideSubmitBtn(true);
    }
  }, [userEmail, userPassword]);

  useEffect(() => {
    if (errorMessage.includes("Incorrect password")) {
      setIncorrectPassword(true);
    } else if (errorMessage.includes("not registered")) {
      setNotRegistedEmail(true);
    }
  }, [errorMessage]);

  const handleLoginUser = async (e) => {
    e.preventDefault();
    if (!userEmail.includes("@") || !userEmail.includes(".")) {
      // handleOnSubmitError()
      return;
    }

    dispatch(resetUser());
    setIncorrectPassword(false);
    setNotRegistedEmail(false);

    try {
      const user = await dispatch(loginUser(formData)).unwrap();
      if(user) {navigate("/alyeqeenTaskTracker/mytasks")};
    } catch (error) {
      // console.error("Login failed:", error);
    }
  };

  const loginBackground = `w-full flex flex-col h-screen justify-center items-center font-nunito`;
  const LoginIcon = <FontAwesomeIcon icon={faSignInAlt} size="1x" />;
  const buttonStyling = `${hideSubmitBtn ? "hidden" : ""} bg-[#0B1869] text-white text-sm font-semibold px-4 py-2 rounded w-full hover:bg-[#0B1869] mt-4`;
  const hoverUnderline = "text-sm mt-2 text-[#0B1869] text-center font-semibold hover:underline";
  const validationStyling = "text-red-500 font-semibold mb-5 text-center text-[12px]";

  return (
    <div className={loginBackground}>
      <AllPurposeContainer containerStyling="bg-white p-8 rounded-xl border border-[#0B1869] shadow-lg xl:w-[29vw] md:w-[40vw] w-[90vw] flex flex-col justify-center  items-center min-h-[400px]">
      <Link title="Al-Yeqeen Task Tracker Home" to="/">
          <ToDoLogo logoStyling="w-40 h-20" />
        </Link>

        <div className="w-full flex flex-col mt-4 mb-2">
          <p className="text-[#0B1869] text-xl font-bold mb-3 text-center">Log In {LoginIcon}</p>

          <AllPurposeLabel labelStyling="text-[#0B1869] font-bold  mb-5 text-center text-sm">Please Enter Your Log In Details</AllPurposeLabel>
        </div>

        <form className="w-full space-y-4" onSubmit={handleLoginUser}>
          <div>
            <AllPurposeInput
              inputPlaceHolder="User Email"
              InputValue={userEmail}
              inputType="email"
              inputId="userEmail"
              inputName="userEmail"
              onchangeFunction={onchangeFunction}
            />
            <AllPurposeLabel labelStyling={validationStyling}>
              {notRegistedEmail
                ? errorMessage
                : userEmail.length > 2 && (!userEmail.includes("@") || !userEmail.includes("."))
                ? "Please enter a valid email"
                : ""}
            </AllPurposeLabel>
          </div>

          <div>
            <AllPurposeInput
              inputPlaceHolder="Password"
              InputValue={userPassword}
              inputType="password"
              inputId="userPassword"
              inputName="userPassword"
              onchangeFunction={onchangeFunction}
            />
            <AllPurposeLabel labelStyling={validationStyling}>{incorrectPassword ? errorMessage : ""}</AllPurposeLabel>
          </div>

          <button type="submit" className={buttonStyling}>
            Log In
          </button>
        </form>

        <div className="flex flex-col mt-3">
          {/* <Link to="/forgotPassword" className={hoverUnderline}>
            Forgot Password? Reset
          </Link> */}
          <Link to="/signup" className={hoverUnderline}>
            Have no Account? Register for free
          </Link>
        </div>
        <br />
        <p className="text-sm text-gray-400">@Suhud Ayodeji Yekini Innovation</p>
      </AllPurposeContainer>
    </div>
  );
};

export default LoginPage;
