// src/context/UserContext.js
import { createContext, useState } from "react";

// Create a context for the user
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Ryan Marlow" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
