import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

function PrivateRoute(props) {
  console.log(props);

  const { authUser } = useAuthStore();
  return authUser ? props.element : Navigate("/login");
}

export default PrivateRoute;
