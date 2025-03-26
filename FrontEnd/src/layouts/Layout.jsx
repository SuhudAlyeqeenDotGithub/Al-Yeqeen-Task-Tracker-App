import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

import { Navigate } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="font-khula">
      {/* {!pagesToHideOn.includes(location.pathname) && <Header />} */}
      <Header />
      <Outlet />
      {location.pathname === "/alyeqeenTaskTracker" && <Navigate to="/alyeqeenTaskTracker/mytasks" />}
    </div>
  );
}

export default Layout;
