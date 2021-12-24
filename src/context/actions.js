const ROOT_URL = "data/token.json";

export async function loginUser(dispatch, loginPayload) {
     
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetch(ROOT_URL, requestOptions);
    let data = await response.json();
    if (data.user) {
      // Change user data only if input from Login
      if (loginPayload.name) data.user.name = loginPayload.name;
      if (loginPayload.password) data.user.password = loginPayload.password;
      if (loginPayload.email) data.user.email = loginPayload.email;
      data.isAuth = true;
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    return;
  } catch (error) {
    console.log(error);
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
