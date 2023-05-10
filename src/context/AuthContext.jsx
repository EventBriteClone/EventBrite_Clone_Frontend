import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: false,
};

export const AuthContext = createContext(initialState);
const savedAuthData = Cookies.get("authData")
  ? JSON.parse(Cookies.get("authData"))
  : null;

function authReducer(_, payload) {
  let newState = {};
  if (payload.action === "login")
    newState = {
      isAuthenticated: true,
      ...payload.data,
    };
  else if (payload.action === "logout") newState = { ...initialState };
  Cookies.set("authData", JSON.stringify(newState), {
    expires: 1,
    secure: true,
    sameSite: "strict",
  });
  setTimeout(function () {
    console.log(Cookies.get("authData"), "cbjsknkm");
  }, 1000);
  // console.log(Cookies.get("authData"), "zzzzzzzzzzz");
  return newState;
}

export default function AuthContextProvider(props) {
  const [authState, dispatch] = useReducer(
    authReducer,
    savedAuthData || initialState
  );

  function setAuthData(authData) {
    console.log("setAuthData", authData);
    const { email, password, id: userId, token } = authData;
    dispatch({ action: "login", data: { email, password, userId, token } });
  }
  function removeAuthData() {
    localStorage.removeItem("event");
    dispatch({ action: "logout" });
  }

  return (
    <AuthContext.Provider value={{ authState, setAuthData, removeAuthData }}>
      {props.children}
    </AuthContext.Provider>
  );
}
