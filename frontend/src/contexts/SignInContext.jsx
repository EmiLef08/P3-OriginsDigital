import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const SignInContext = createContext();

export function SignInContextProvider({ children }) {
  const [email, setEmail] = useState(localStorage.getItem("user"));
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user"));
  const [userAvatar, setUserAvatar] = useState(localStorage.getItem("user"));

  const values = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      user,
      setUser,
      isLoggedIn,
      setIsLoggedIn,
      userAvatar,
      setUserAvatar,
    }),
    [
      email,
      setEmail,
      password,
      setPassword,
      user,
      setUser,
      isLoggedIn,
      setIsLoggedIn,
      userAvatar,
      setUserAvatar,
    ]
  );

  return (
    <SignInContext.Provider value={values}>{children}</SignInContext.Provider>
  );
}
SignInContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSignInContext = () => useContext(SignInContext);
