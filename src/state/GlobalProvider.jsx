// src/context/UserContext.js
import { createContext, useState } from "react";
import DataContext from "./DataContext";


export function GlobalProvider({ children }) {
  const [user, setUser] = useState({ name: "Ryan Marlow" });

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;
