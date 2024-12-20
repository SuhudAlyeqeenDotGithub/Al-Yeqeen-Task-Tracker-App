import ToDoLogo from "./ToDoLogo";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const linkClass =
    "text-blue-900 font-semibold hover:bg-blue-800 p-2 rounded-md hover:text-white";

  return (
    <header className="sticky top-0 bg-white pb-8">
      <div className="flex justify-center mb-5 mt-5">
        <ToDoLogo />
      </div>

      <div className="pr-8">
        <ul className="flex justify-end">
          <li>
            <Link to="/login" className={linkClass}>
              Log Out <FontAwesomeIcon icon={faSignInAlt} size="1x" />
            </Link>
          </li>
        </ul>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
