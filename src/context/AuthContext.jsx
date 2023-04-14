import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: false,
};

const AuthContext = createContext(initialState);
const savedAuthData = Cookies.get("authData");

function authReducer(_, payload) {
  let newState = {};
  if (payload.action === "login")
    newState = {
      isAuthenticated: true,
      ...payload,
    };
  else if (payload.action === "logout") newState = { ...initialState };

  Cookies.set("authData", JSON.stringify(newState), {
    expires: 1,
    secure: true,
    httpOnly: true,
  });
  return newState;
}

export default function AuthContextProvider(props) {
  const [authState, dispatch] = useReducer(
    authReducer,
    savedAuthData || initialState
  );

  function setAuthData(authData) {
    const { email, password, id: userId, token } = authData;
    dispatch({ action: "login", payload: { email, password, userId, token } });
  }
  function removeAuthData() {
    dispatch({ action: "logout" });
  }

  return (
    <AuthContext.Provider value={{ authState, setAuthData, removeAuthData }}>
      {props.children}
    </AuthContext.Provider>
  );
}
