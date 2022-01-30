import { Navigate } from "react-router";
import { useAuthState } from "../context";

export default function PrivateRoute({ children }) {
  const userDetails = useAuthState(); //read user details from context
  return userDetails.token ? children : <Navigate to="/login" />;
}
