import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  console.log(localStorage.getItem("loggedInUser"));

  return (
    <UserContext.Provider
      value={{ loggedInUser, setLoggedInUser, setLoading, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
