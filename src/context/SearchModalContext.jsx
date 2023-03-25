import { createContext, useContext, useReducer } from "react";

const SearchContext = createContext(null);

const SearchDispatchContext = createContext(null);

export function SearchProvider({ children }) {
  const [isOpen, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchContext.Provider value={isOpen}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}

export function useSearchState() {
  return useContext(SearchContext);
}

export function useSearchDispatch() {
  return useContext(SearchDispatchContext);
}

function searchReducer(isOpen, action) {
  switch (action) {
    case true: {
      return {
        isOpen: true,
      };
    }
    case false: {
      return {
        isOpen: false,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = {
  isOpen: false,
};
