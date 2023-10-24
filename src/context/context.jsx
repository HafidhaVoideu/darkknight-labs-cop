import React, { useState, useContext } from "react";

export const UserContext = React.createContext();

import { user as defaultUser } from "../data/user";
import { projects as defaultProjects } from "../data/projects";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const [projects, setProjects] = useState(defaultProjects);
  const [synergies, setSynergies] = useState();
  const [featuredProjects, setFeaturedProjects] = useState();
  const [role, setRole] = useState("");

  const [alert, setAlert] = useState({ isAlert: false, alertMessage: "" });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        projects,
        setProjects,
        role,
        setRole,
        alert,
        setAlert,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContextUser = () => {
  return useContext(UserContext);
};
export { UserContextProvider };
