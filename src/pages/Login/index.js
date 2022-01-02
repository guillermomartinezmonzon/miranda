import React, { useState } from "react";
import { useNavigate } from "react-router";

import { loginUser, useAuthDispatch } from "../../context";
import {GreenBtn} from "../../styles/buttons/GrenBtn";
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

  return (
      <LoginStyled>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <table>
                <tbody>
                    {/* <tr><label htmlFor="name">Name</label></tr> */}
                    {/* <tr> */}    
                    {/*   <input */}
                    {/*     type="text" */}
                    {/*     id="name" */}
                    {/*     value={name} */}
                    {/*     onChange={(e) => setName(e.target.value)} */}
                    {/*   /> */}
                    {/* </tr> */}
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
                    <tr><center><GreenBtn>login</GreenBtn></center></tr>
                </tbody>
            </table>    
        </form>
     </LoginStyled>     
  );
}

export default Login;
