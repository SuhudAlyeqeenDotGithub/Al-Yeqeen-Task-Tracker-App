import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { RecentTasks } from "../components/ShortComponents";

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* {!pagesToHideOn.includes(location.pathname) && <Header />} */}
      <Header />
      <Outlet />
      {location.pathname === "/alyeqeenTaskTracker" && <RecentTasks />}
    </>
  );
}

export default Layout;
