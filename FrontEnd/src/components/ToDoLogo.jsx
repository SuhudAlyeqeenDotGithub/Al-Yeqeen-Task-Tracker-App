import Logo from "../assets/ToDoAppLogo.png";

const ToDoLogo = ({ logoStyling }) => {
  return (
    <img src={Logo} alt="Al-Yeqeen Tast Tracker Logo" className={logoStyling} />
  );
};

export default ToDoLogo;
