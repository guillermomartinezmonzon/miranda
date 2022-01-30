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

    const style2 = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '30px',
        color: 'green'
    }
    const style = {
        color: 'red',
        position: 'absolute',
        boxShadow: '0px 20px 30px #00000014',
        top: '20%',
        left: '35%',
        border: '1px solid gray',
        borderRadius: 25,
        display: 'flex',
        height: 400,
        width: 500,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '30px'
    }
  return (
      <div style={style}>
        <h1>Login</h1>
        <form onSubmit={handleLogin} style={style2}>
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
          <p>user/user</p>
      </div>
  );
}

export default Login;
