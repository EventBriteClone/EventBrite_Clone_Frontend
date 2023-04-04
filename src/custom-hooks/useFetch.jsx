import { useEffect, useReducer, useCallback } from "react";
import config from "../utils/config";

const initialState = {
  state: "loading",
  response: null,
  errorMessage: null,
};

function reducerFunction(state, action) {
  switch (action.type) {
    case "complete":
      return {
        response: action.res,
        state: action.type,
        errorMessage: null,
      };
    case "error":
      return {
        response: null,
        state: action.type,
        errorMessage: action.message,
      };
    default:
      return state;
  }
}

export default function useFetch(
  city,
  endpoint,
  configurationOpt = {},
  callback
) {
  const [fetchState, dispatch] = useReducer(reducerFunction, initialState);
  let modifiedFetchState;
  const fetchData = () => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`${config.baseURL}${endpoint}`, { ...configurationOpt, signal })
      .then((response) => {
        if (!response.ok) {
          dispatch({ type: "error", message: response.statusText });
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (!data) return;
        dispatch({ type: "complete", res: data });
      })
      .catch((err) => {
        dispatch({ type: "error", message: err.message });
      });
    return () => controller.abort();
  };
  console.log(endpoint, city);
  useEffect(() => {
    fetchData();
  }, [callback]);

  if (callback && fetchState.response) {
    const newData = callback(fetchState.response);
    if (newData) {
      modifiedFetchState = { ...fetchState, response: newData };
    }
  }
  return modifiedFetchState || fetchState;
}
