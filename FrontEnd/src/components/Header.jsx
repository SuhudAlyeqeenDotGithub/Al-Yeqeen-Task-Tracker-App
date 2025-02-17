import {ToDoLogo} from "./ToDoLogo";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getDataFromLocalStorage } from "../reduxFeatures/taskState/taskLinkToBackend";
import { useDispatch } from "react-redux";
import { resetUser } from "../reduxFeatures/authenticationState/authSlice";
import { resetTasks } from "../reduxFeatures/taskState/taskSlice";

function Header() {
  const linkClass = "text-[#0B1869] font-semibold hover:bg-[#0B1869] p-2 rounded-md hover:text-white";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const currentUser = getDataFromLocalStorage("user");
    const tasks = getDataFromLocalStorage("tasks");
    if (currentUser && currentUser.userToken && currentUser.userId && tasks) {
      localStorage.removeItem("user");
      localStorage.removeItem("tasks");
      dispatch(resetUser());
      dispatch(resetTasks());
      navigate("/login");
    }
  };

  return (
    <header className="flex flex-wrap sticky top-0 py-8 items-center lg:justify-between justify-center px-32 bg-white gap-4">

      <div className="justify-center flex-shrink-0">
        <Link title="Al-Yeqeen Task Tracker Home" to="/">
          <ToDoLogo logoStyling="h-[100px] w-[200px] py-2" />
        </Link>
      </div>

      <Navigation />

      <div className="pr-8">
        <ul className="flex justify-end">
          <li className="whitespace-nowrap">
            <button title="Logout" onClick={handleLogout} className={linkClass}>
              Log Out <FontAwesomeIcon icon={faSignInAlt} size="1x" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
