import React, { useState } from "react";
import { useNavigate } from "react-router";

import { loginUser, useAuthDispatch } from "../../context";
import {GreenBtn} from "../../styles/buttons/GrenBtn";
import {SignUpStyled} from "./SignUp.styled";

function SignUp() {
  console.log("SignUp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useAuthDispatch();
  let navigate = useNavigate();

  const handleSignUp = async (e) => {
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
      <SignUpStyled>
        <h1>SignUp</h1>
        <form onSubmit={handleSignUp}>
            <table>
                <tbody>
                    <tr><label htmlFor="name">Name</label></tr>
                    <tr>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </tr>
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
                    <tr><label htmlFor="password">Confirm password</label></tr>
                    <tr>
                      <input
                        type="password"
                        id="password"
                      />
                    </tr>
                    <tr><center><GreenBtn>login</GreenBtn></center></tr>
                </tbody>
            </table>    
        </form>
     </SignUpStyled>     
  );
}

export default SignUp;
