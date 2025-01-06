import { Navigate } from "react-router-dom";

function ProtectRoute({ children }) {
  const token = localStorage.getItem("user");

    return <>{token ? children : <Navigate to= "/login" />}</>;
}

export default ProtectRoute;
