import { Children, createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = () => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {Children}
    </AuthContext.Provider>
  );
};
