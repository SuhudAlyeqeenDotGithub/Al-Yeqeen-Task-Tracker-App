import AllPurposeContainer from "../components/AllPurposeContainer";
import AllPurposeLabel from "../components/AllPurposeLabel";
import Logo from "../components/ToDoLogo";
import AllPurposeInput from "../components/allPurposeInput";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { reset } from "../reduxFeatures/authenticationState/authSlice";
import { registerUser } from "../reduxFeatures/authenticationState/authThunks";
import { useSelector, useDispatch } from "react-redux";

const SignUpPage = () => {
  // Background styling for the signup page

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, errorMessage } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
  });

  const { userName, userEmail, userPassword, userConfirmPassword } = formData;

  const handleFormData = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [hideSubmitBtn, setHideSubmitBtn] = useState(true);
  const [onSubmitError, setOnSubmitError] = useState(false);

  useEffect(() => {
    if (
      userEmail.includes("@") &&
      userEmail.includes(".") &&
      userConfirmPassword === userPassword
    ) {
      setHideSubmitBtn(false);
    } else {
      setHideSubmitBtn(true);
    }
  }, [userEmail, userPassword, userConfirmPassword]);

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    if (
      !userEmail.includes("@") ||
      !userEmail.includes(".") ||
      userConfirmPassword !== userPassword
    ) {
      setOnSubmitError(true);
      return;
    }

    dispatch(reset());

    try {
      // Dispatch the thunk and unwrap the result
      const user = await dispatch(registerUser(formData)).unwrap();
      navigate("/alyeqeenTaskTracker/mytasks");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const validationStyling =
    "text-red-500 font-semibold mb-5 text-center text-[12px]";

  const signUpBackground = `bg  bg-cover bg-center h-screen w-full flex justify-center items-center`;
  const UserIcon = <FontAwesomeIcon icon={faUserAlt} size="1x" />;
  const buttonStyling = `${
    hideSubmitBtn ? "hidden" : ""
  } bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded w-full hover:bg-blue-900`;
  const hoverUnderline =
    "text-sm mt-4 text-blue-900 text-center font-semibold hover:underline";

  return (
    <div className={signUpBackground}>
      <AllPurposeContainer containerStyling="bg-white p-8 rounded-xl border border-blue-300 shadow-lg max-w-md w-full flex flex-col justify-center  items-center min-h-[400px]">
        <Logo logoStyling="w-30 h-28" />

        <div className="w-full flex flex-col mt-4 mb-2">
          <p className="text-blue-900 text-xl font-bold mb-3 text-center">
            Sign Up {UserIcon}
          </p>

          <AllPurposeLabel labelStyling="text-blue-900 font-semibold mb-5 text-center text-sm">
            Please Enter Your Sign-Up Details
          </AllPurposeLabel>

          <AllPurposeLabel labelStyling={validationStyling}>
            {onSubmitError ? "Invalid Email or Passwords" : errorMessage}
          </AllPurposeLabel>
        </div>

        <form className="w-full space-y-4" onSubmit={handleRegisterUser}>
          {/* <AllPurposeLabel labelStyling="text-black" value="User Name" /> */}
          <AllPurposeInput
            inputPlaceHolder="User Name"
            inputValue={userName}
            inputType="text"
            inputId="name"
            inputName="userName"
            onchangeFunction={handleFormData}
          />

          {/* <AllPurposeLabel labelStyling="text-black" value="User Email" /> */}
          <div>
            <AllPurposeInput
              inputPlaceHolder="User Email *"
              inputValue={userEmail}
              inputType="email"
              inputId="userEmail"
              inputName="userEmail"
              onchangeFunction={handleFormData}
            />

            <AllPurposeLabel labelStyling={validationStyling}>
              {(!userEmail.includes("@") || !userEmail.includes(".")) &&
              userEmail.length > 0
                ? "Submit Disabled: Please enter a valid email"
                : ""}
            </AllPurposeLabel>
          </div>

          {/* <AllPurposeLabel labelStyling="text-black" value="Password" /> */}
          <div>
            <AllPurposeInput
              inputPlaceHolder="Password *"
              inputValue={userPassword}
              inputType="password"
              inputId="userPassword"
              inputName="userPassword"
              onchangeFunction={handleFormData}
            />
            <AllPurposeLabel labelStyling={validationStyling}>
              {/* {userPassword.length < 9 && userPassword.length > 0 ? "Weak Password": ""} */}
            </AllPurposeLabel>
          </div>

          <div>
            <AllPurposeInput
              inputPlaceHolder="Confirm Password *"
              inputValue={userConfirmPassword}
              inputType="password"
              inputId="userConfirmPassword"
              inputName="userConfirmPassword"
              onchangeFunction={handleFormData}
            />
            <AllPurposeLabel labelStyling={validationStyling}>
              {userConfirmPassword !== "" &&
              userConfirmPassword !== userPassword
                ? "Submit Disabled: Password are not matching"
                : ""}
            </AllPurposeLabel>
          </div>

          <button type="submit" className={buttonStyling}>
            Sign Up
          </button>
        </form>

        <div className={hoverUnderline}>
          <Link to="/login">Have an Account Already? Log in</Link>
        </div>
        <br />
        <p className="text-sm text-gray-400">
          @Suhud Ayodeji Yekini Innovation
        </p>
      </AllPurposeContainer>
    </div>
  );
};

export default SignUpPage;
