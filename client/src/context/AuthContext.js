import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  user: {
    profilePicture: "person/user2.jpg",
    coverPicture: "",
    followers: [
      "61c4c179e2eaeb39fcb37b4b",
      "61d3136eb39bd03c44d20182",
      "61d31353b39bd03c44d20180",
      "61c2b41287ddd61cdc77be13",
      "61d9ac3b90bafb1fe86b1baf",
    ],
    followings: [
      "61c2b41287ddd61cdc77be13",
      "61d3136eb39bd03c44d20182",
      "61d31353b39bd03c44d20180",
      "61c4c179e2eaeb39fcb37b4b",
    ],
    isAdmin: false,
    _id: "6138904b3ffcf35b30aacc6b",
    username: "test2",
    email: "test2@gmail.com",
    password: "$2b$10$lMnsn/fDGV6GLwjUPdUDrupsUTj7jmaO1yHxoON0OSQ3dB7IFq0dC",
    createdAt: "2021-09-08T10:28:27.964Z",
    updatedAt: "2022-01-08T15:28:30.761Z",
    department: "BBA",
    description: "Hello world👋",
    from: "Kolkata",
    semester: "1st",
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
