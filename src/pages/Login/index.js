import { useState } from "react";
import { useNavigate } from "react-router";
import { loginUser, useAuthDispatch } from "../../context";
import {GreenBtn} from "../../styles/buttons/GrenBtn";
import {RedButton} from "../../styles/buttons/RedBtn";
import {LoginStyled} from "./Login.styled";

function Login() {
  console.log("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  const dispatch = useAuthDispatch();
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await loginUser(dispatch, { email, password });
      if (!response.token) alert(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <div>
       <center>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    <GreenBtn>login</GreenBtn>
        </form>
        <RedButton onClick={handleSignUp}>SignUp</RedButton>
      </center>
      </div>
  );
}

export default Login;
