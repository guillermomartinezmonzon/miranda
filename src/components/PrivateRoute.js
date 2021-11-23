import { Navigate } from "react-router";
import useToken from "../utils/useToken";

export default function PrivateRoute({ children }) {
  const { token, setToken } = useToken();

  return token ? children : <Navigate to="/login" setToken={setToken} />;
}
