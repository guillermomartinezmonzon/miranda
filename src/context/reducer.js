let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).auth_token
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
        token: action.payload.auth_token,
        loading: false,
        isAuth: action.payload.isAuth,
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
      return {
        ...initialState,
        user: action.payload,
      };
    default:
      throw new Error("Reducer not defined");
  }
};
