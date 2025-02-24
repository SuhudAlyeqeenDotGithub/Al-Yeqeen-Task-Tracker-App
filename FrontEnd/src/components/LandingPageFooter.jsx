import AllPurposeInput from "./AllPurposeInput";
import Github from "../assets/githublogo.png";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const LandingPageFooter = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { name, email, message } = formData;

  function handleFormData(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const textAreaStyling = "border-2 border-mydarkblue rounded-md p-2 outline-hidden w-full";

  return (
    <div className="flex flex-col justify-center gap-y-10 font-nunito text-mydarkblue font-semibold bg-zinc-200 px-20 py-10">
      <h1 className="font-bold text-[30px] text-center">Have any Suggestions, Feedback or Questions?</h1>
      <div className="flex items-center justify-center p-8">
        <div className="overflow-auto border-2 border-mydarkblue rounded-xl w-[30%] h-[600px] shadow-md bg-gradient-to-l from-green-50 to-yellow-50 scrollbar scrollbar-thumb-[#02132D] [&::-webkit-scrollbar-thumb]:rounded-full">
          <form>
            <div className="flex flex-col gap-y-10 p-6 justify-center items-center">
              <h1 className="font-bold p-8 text-lg">One way of contacting me is by filling the below form</h1>
              <AllPurposeInput
                inputPlaceHolder="Name"
                inputValue={name}
                inputType="text"
                inputName="name"
                onchangeFunction={handleFormData}
                styling={textAreaStyling}
              />
              <AllPurposeInput
                inputPlaceHolder="Email *"
                inputValue={email}
                inputType="text"
                inputName="email"
                onchangeFunction={handleFormData}
                styling={textAreaStyling}
              />
              <textarea
                placeholder="Task Description *"
                rows="5"
                cols="40"
                value={message}
                name="message"
                className={textAreaStyling}
                onChange={handleFormData}
              />

              <button
                type="submit"
                title="submit"
                className="border-2 border-mydarkblue w-[40%] bg-mydarkblue text-white rounded-md p-2 font-bold hover:scale-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center w-[50%] gap-y-10">
          <h1 className="font-bold p-4 border-b-4 border-mydarkblue text-2xl">Click me</h1>
          <div className="flex flex-row gap-5">
            <a href="https://github.com/SuhudAlyeqeenDotGithub?tab=repositories" target="_blank">
              <FaGithub className="size-10 text-github"/>
            </a>
            <a href="https://wa.me/447840262030" target="_blank">
              <FaWhatsapp className="size-10 text-whatsapp" />
            </a>
            <a href="https://www.linkedin.com/in/suhud-yekini-a78330234/" target="_blank">
              <FaLinkedinIn className="size-10 text-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageFooter;
