import {loginAPI} from "../api";

export async function loginUser(dispatch, loginPayload) {

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let data = await loginAPI(loginPayload.email, loginPayload.password)
    if (data.token) {
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
}

export async function setError(dispatch, error) {
    dispatch({ type: "SET_ERROR", payload: error});
  localStorage.removeItem("currentUser");
}

