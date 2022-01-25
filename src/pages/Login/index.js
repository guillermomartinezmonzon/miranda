import React, { useState } from "react";
import { useNavigate } from "react-router";

import { loginUser, useAuthDispatch } from "../../context";
import {GreenBtn} from "../../styles/buttons/GrenBtn";
import {RedButton} from "../../styles/buttons/RedBtn";
import {LoginStyled} from "./Login.styled";

function Login() {
  console.log("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useAuthDispatch();
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await loginUser(dispatch, { email, password, name });
      if (!response.auth_token) return;
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
      <LoginStyled>
       <center>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <table>
                <tbody>
                    <tr><label htmlFor="email">Email</label></tr>
                    <tr>
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </tr>
                    <tr><label htmlFor="password">Password</label></tr>
                    <tr>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </tr>
                    <tr><GreenBtn>login</GreenBtn></tr>
                </tbody>
            </table>    
        </form>
        <RedButton onClick={handleSignUp}>SignUp</RedButton>
      </center>
     </LoginStyled>     
  );
}

export default Login;
