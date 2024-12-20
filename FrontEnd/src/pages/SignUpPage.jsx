import AllPurposeContainer from "../components/AllPurposeContainer";
import AllPurposeLabel from "../components/AllPurposeLabel";
import Logo from "../components/ToDoLogo";
import AllPurposeInput from "../components/allPurposeInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUpPage = () => {
  // Background styling for the signup page
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const { userName, email, password, confirmedPassword } = formData;

  const onchangeFunction = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
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

          <AllPurposeLabel
            labelStyling="text-blue-900 font-semibold  mb-5 text-center text-sm"
            value="Please Enter Your Sign-Up Details"
          />
        </div>

        <form className="w-full">
          {/* <AllPurposeLabel labelStyling="text-black" value="User Name" /> */}
          <AllPurposeInput
            inputPlaceHolder="User Name"
            value={userName}
            inputType="text"
            inputId="name"
            name="name"
            onchangeFunction={onchangeFunction}
          />

          {/* <AllPurposeLabel labelStyling="text-black" value="User Email" /> */}
          <AllPurposeInput
            inputPlaceHolder="User Email"
            value={email}
            inputType="email"
            inputId="userEmail"
            name="userEmail"
            onchangeFunction={onchangeFunction}
          />

          {/* <AllPurposeLabel labelStyling="text-black" value="Password" /> */}
          <AllPurposeInput
            inputPlaceHolder="Password"
            value={password}
            inputType="password"
            inputId="userPassword"
            name="userPassword"
            onchangeFunction={onchangeFunction}
          />

          {/* <AllPurposeLabel labelStyling="text-black" value="Confirm Password" /> */}
          <AllPurposeInput
            inputPlaceHolder="Confirm Password"
            value={confirmedPassword}
            inputType="password"
            inputId="confirmedUserPassword"
            name="confirmedUserPassword"
            onchangeFunction={onchangeFunction}
          />

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
