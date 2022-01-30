import {putAPI} from "../api";

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";
let isAuth = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).isAuth
  : "";

export const initialState = {
  user: "" || user,
  token: "" || token,
  loading: false,
  isAuth: false || isAuth,
};

async function changeUserAPI(user, oldMail){
    return await putAPI('users', oldMail, user)
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        isAuth: true,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
        isAuth: false,
      };
    case "TOGGLE_AUTH":
      return {
        ...initialState,
        isAuth: !initialState.isAuth,
      };
    case "CHANGE_USER":
      changeUserAPI(action.payload, initialState.user.email)
          .then(res=> {
              initialState.user.email = action.payload.email;
              initialState.user.name = action.payload.name;
              alert(res)
              localStorage.setItem("currentUser", JSON.stringify(initialState));
              return res
          })
          .catch(e=>{alert(e)});
      return {
        ...initialState,
        user: action.payload,
      };
    default:
      throw new Error("Reducer not defined");
  }
};
