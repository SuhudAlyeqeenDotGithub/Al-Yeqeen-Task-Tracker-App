import { useRef, useState } from "react";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const LandingPageFooter = () => {
  const [formData, setFormData] = useState({ name: "", senderEmail: "", message: "" });
  const { name, senderEmail, message } = formData;
  const textAreaInput = useRef(null);
  const [responseFromBackEnd, setResponseFromBackEnd] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextAreaInput = () => {
    if (textAreaInput.current) {
      const textArea = textAreaInput.current;
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
    }
  };
  const handleInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const inputStyling =
    "text-darkBlue2 placeholder-[#425559] text-lg rounded bg-white p-4 w-full outline-hidden focus:border-2 border-amber-500";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://suhud-ayodeji-yekini-portfolio.vercel.app/api/contactsuhudayodejiyekini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.status === 200) {
        const responseData = await response.json();
        setLoading(false);
        setResponseFromBackEnd(responseData.message);
        setFormData({ name: "", senderEmail: "", message: "" });
      } else {
        setLoading(false);
        setResponseFromBackEnd("Error sending email. Please try again later");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div id="contactme" className="text-white font-bold p-5 md:p-20 justify- bg-darkBlue1">
      <div className="flex flex-col gap-10 md:gap-20 mt-20 items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 id="contactme" className="font-bold text-[40px] text-center mb-10">
            Contact Me
          </h1>
          <form className="w-full md:w-1/2 flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              className={inputStyling}
              placeholder="Name"
              type="text"
              name={"name"}
              value={name}
              onChange={handleInput}
            />
            <input
              className={inputStyling}
              placeholder="Email *"
              type="email"
              name={"senderEmail"}
              value={senderEmail}
              onChange={handleInput}
            />
            <div className="ml-3">
              {senderEmail === "" || !senderEmail.includes("@") || senderEmail.length < 2
                ? "Please enter a valid email"
                : ""}
            </div>
            <textarea
              onInput={handleTextAreaInput}
              ref={textAreaInput}
              className={`${inputStyling} overflow-hidden`}
              rows={4}
              placeholder="Message *"
              name={"message"}
              value={message}
              onChange={handleInput}
            />
            <div className="ml-3">{message === "" ? "Please enter a message" : ""}</div>
            <div className="flex flex-col items-center justify-center">
              <div className="ml-3 text-xl text-center">{responseFromBackEnd}</div>
              {loading && (
                <div className="flex flex-row gap-2 text-lg">
                  <div>Sending Email...</div>
                  <div className="w-6 h-6 border-4 border-amber-500 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!senderEmail || !message}
                className="disabled:bg-red-500/ whitespace-nowrap bg-amber-600 disabled:cursor-not-allowed font-bold text-lg mt-5 rounded-md transform duration-100 p-4 hover:scale-105"
                title="Submit"
              >
                {senderEmail && message ? "Submit" : "Fill in the form Please"}
              </button>
            </div>
          </form>
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-darkBlue3/60 border-t-3 border-amber-500 py-8">
          <h1 id="contactme" className="font-extrabold text-[40px] text-center mb-10">
            Click Me
          </h1>
          <div className="w-full md:w-1/3 flex p-10 flex-row gap-5 justify-center items-center bg-white rounded transform duration-200 hover:scale-110 h-1/3">
            <a href="https://github.com/SuhudAlyeqeenDotGithub?tab=repositories" target="_blank">
              <FaGithub className="size-14 text-github transform duration-200 hover:scale-110" />
            </a>
            <a href="https://wa.me/447840262030" target="_blank">
              <FaWhatsapp className="size-14 text-whatsapp transform duration-200 hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/suhud-yekini-a78330234/" target="_blank">
              <FaLinkedinIn className="size-14 text-linkedin transform duration-200 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageFooter;
