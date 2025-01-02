import AllPurposeContainer from "../components/AllPurposeContainer";
import AllPurposeLabel from "../components/AllPurposeLabel";
import Logo from "../components/ToDoLogo";
import AllPurposeInput from "../components/allPurposeInput";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { register } from "../reduxFeatures/authenticationState/authLinkToBackend";

const SignUpPage = () => {
  // Background styling for the signup page
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmedPassword: "",
  });

  const { userName, userEmail, userPassword, userConfirmedPassword } = formData;

  const [showValidateFormData, setShowValidateFormData] = useState({
    showEmail: false,
    showPass1: false,
    showPass2: false,
  });



  const [validationMessage, setValidationMessage] = useState({
    showEmailMessage: "",
    showPass1Message: "",
    showPass2Message: "",
  });

  const handleFormData = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (userEmail === "" || !userEmail.includes("@")) {
      setShowValidateFormData((prevState) => {
        ({ ...prevState, showEmail: true });
      });
      setValidationMessage((prevState) => {
        ({ ...prevState, showEmailMessage: "Please enter a valid email" });
      });
    }
    if (userPassword === "") {
      setShowValidateFormData((prevState) => {
        ({ ...prevState, showPass1: true });
      });
      setValidationMessage((prevState) => {
        ({ ...prevState, showPass1Message: "Please enter a password" });
      });
    }
    if (userConfirmedPassword !== userPassword) {
      setShowValidateFormData((prevState) => {
        ({ ...prevState, showPass2: true });
      });
      setValidationMessage((prevState) => {
        ({ ...prevState, showPass2Message: "Please ensure passwords match" });
      });
    }
  }, [userEmail, userPassword, userConfirmedPassword]);

  // const validateEmailStyling = ` text-red-500 font-semibold mb-5 text-center text-sm`;

  // const validatePassword1Styling = ` text-red-500 font-semibold mb-5 text-center text-sm`;

  // const validatePassword2Styling = ` text-red-500 font-semibold mb-5 text-center text-sm`;

  const handleRegisterUser = (e) => {
    e.preventDefault;
    alert(JSON.stringify(new FormData(e.target)));
  };

  const signUpBackground = `bg  bg-cover bg-center h-screen w-full flex justify-center items-center`;
  const UserIcon = <FontAwesomeIcon icon={faUserAlt} size="1x" />;
  const buttonStyling = `bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded w-full hover:bg-blue-900`;
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
        </div>

        <form className="w-full" onSubmit={handleRegisterUser}>
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

            <AllPurposeLabel labelStyling={validateEmailStyling}>
              {validationMessage.showEmailMessage}
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
            <AllPurposeLabel labelStyling={validatePassword1Styling}>
              {validationMessage.showPass1Message}
            </AllPurposeLabel>
          </div>

          {/* <AllPurposeLabel labelStyling="text-black" value="Confirm Password" /> */}
          <div>
            <AllPurposeInput
              inputPlaceHolder="Confirm Password *"
              inputValue={userConfirmedPassword}
              inputType="password"
              inputId="userConfirmedPassword"
              inputName="userConfirmedPassword"
              onchangeFunction={handleFormData}
            />
            <AllPurposeLabel labelStyling={validatePassword2Styling}>
              {validationMessage.showPass2Message}
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
