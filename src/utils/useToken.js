// Custom Hook

import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token; // chaining operator (?) on first access value of .getItem('token') will be undefined
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token); // save the token to state
  };

  return {
    setToken: saveToken,
    token,
  };
}

export async function fetchToken(credentials) {
  return fetch("data/token.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
}
