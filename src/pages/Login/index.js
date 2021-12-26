import React, { useState } from "react";
import { useNavigate } from "react-router";

import { loginUser, useAuthDispatch } from "../../context";

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
    <div>
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button>login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
