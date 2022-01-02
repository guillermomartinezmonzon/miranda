import { Navigate } from "react-router";
import { useAuthState } from "../context";

export default function PrivateRoute({ children }) {
  const userDetails = useAuthState(); //read user details from context
  return userDetails.isAuth ? children : <Navigate to="/login" />;
}
