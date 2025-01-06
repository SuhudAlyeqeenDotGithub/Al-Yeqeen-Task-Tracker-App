import { Navigate } from "react-router-dom";
import { getDataFromLocalStorage } from "../reduxFeatures/taskState/taskLinkToBackend";

function ProtectRoute({ children }) {
  const token = getDataFromLocalStorage("user")?.userToken;

  return <>{token ? children : <Navigate to="/login" />}</>;
}

function ProtectLoginRoute({ children }) {
  const currentUser = getDataFromLocalStorage("user");
  return <>{currentUser && currentUser.userToken && currentUser.userId ? <Navigate to="/alyeqeenTaskTracker/mytasks" /> : children}</>;
}

export { ProtectRoute, ProtectLoginRoute };
