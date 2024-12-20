import AllPurposeContainer from "../components/AllPurposeContainer";
import AllPurposeLabel from "../components/AllPurposeLabel";
import Logo from "../components/ToDoLogo";
import AllPurposeInput from "../components/allPurposeInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginPage = () => {
  // Background styling for the signup page
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const onchangeFunction = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const loginBackground = `bg  bg-cover bg-center h-screen w-full flex justify-center items-center`;
  const LoginIcon = <FontAwesomeIcon icon={faSignInAlt} size="1x" />;
  const buttonStyling = `bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded w-full hover:bg-blue-900`;
  const hoverUnderline =
    "text-sm mt-2 text-blue-800 text-center font-semibold hover:underline";

  return (
    <div className={loginBackground}>
      <AllPurposeContainer containerStyling="bg-white p-8 rounded-xl border border-blue-800 shadow-lg max-w-md w-full flex flex-col justify-center  items-center min-h-[400px]">
        <Logo logoStyling="w-30 h-28" />

        <div className="w-full flex flex-col mt-4 mb-2">
          <p className="text-blue-900 text-xl font-bold mb-3 text-center">
            Log In {LoginIcon}
          </p>

          <AllPurposeLabel
            labelStyling="text-blue-900 font-semibold  mb-5 text-center text-sm"
            value="Please Enter Your Log In Details"
          />
        </div>

        <form className="w-full">
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

          <Link to="/alyeqeenTaskTracker">
            <button type="submit" className={buttonStyling}>
              Log In
            </button>
          </Link>
        </form>

        <div className="flex flex-col mt-3">
          <Link to="/forgotPassword" className={hoverUnderline}>
            Forgot Password? Reset
          </Link>
          <Link to="/signup" className={hoverUnderline}>
            Have no Account? Register
          </Link>
        </div>
        <br />
        <p className="text-sm text-gray-400">
          @Suhud Ayodeji Yekini Innovation
        </p>
      </AllPurposeContainer>
    </div>
  );
};

export default LoginPage;
