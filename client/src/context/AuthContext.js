import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  user: {
    _id: "6123c69352262582f0dc5c57",
    username: "test1",
    email: "test1@gmail.com",
    profilePicture: "person/user5.jpg",
    coverPicture: "post/post5.jpg",
    isAdmin: false,
    followers: ["6138904b3ffcf35b30aacc6b", "61c2b41287ddd61cdc77be13"],
    followings: ["6123c68a52262582f0dc5c55"],
    description: "Never give up",
    from: "Mars",
    department: "IT",
    semester: "3rd",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);
export const AuthContextProvider = ({ children }) => {
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
      {children}
    </AuthContext.Provider>
  );
};
