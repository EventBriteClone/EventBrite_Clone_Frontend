import { useEffect, useReducer } from "react";
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

function fetchData({ endpoint, configurationOpt, dispatch, signal }) {
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
}

export default function useFetch({
  endpoint,
  configurationOpt = {},
  callback,
  notMockingCallback,
  dependOn = [],
}) {
  const [fetchState, dispatch] = useReducer(reducerFunction, initialState);
  let modifiedFetchState;
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData({ endpoint, configurationOpt, dispatch, signal });
    return () => controller.abort();
  }, [endpoint]);

  if (callback && fetchState.response && fetchState.response.length) {
    console.log(fetchState.response);
    const newData = callback(fetchState.response);
    modifiedFetchState = { ...fetchState, response: newData || null };
  }
  if (config.mocking === "false" && notMockingCallback) {
    const newData = notMockingCallback(fetchState.response);
    modifiedFetchState = { ...fetchState, response: newData || null };
  }
  return modifiedFetchState || fetchState;
}
