import { Navigate } from "react-router-dom";
import { getDataFromLocalStorage } from "../reduxFeatures/taskState/taskLinkToBackend";

function ProtectRoute({ children }) {
  const user = getDataFromLocalStorage("user", null)
  const token = user ? user.userToken : null
  
  return <>{token !== null ? children : <Navigate to="/login" />}</>;
}

function ProtectLoginRoute({ children }) {
  const user = getDataFromLocalStorage("user", null)
  const token = user ? user.userToken : null
  return <>{token !== null ? <Navigate to="/alyeqeenTaskTracker/mytasks" /> : children}</>;
}

export { ProtectRoute, ProtectLoginRoute };
