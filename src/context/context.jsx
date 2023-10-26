import React, { useState, useContext, useEffect } from "react";
import { user as defaultUser } from "../data/user";
import { projects as defaultProjects } from "../data/projects";
import { synergies as defaultSynergies } from "../data/synergies";
import { pendingSynergies as defaultPendingSynergies } from "../data/pendingSynergies";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const [projects, setProjects] = useState(defaultProjects);
  const [synergies, setSynergies] = useState(defaultSynergies);
  const [pendingSynergies, setPendingSynergies] = useState(
    defaultPendingSynergies
  );
  const [featuredProjects, setFeaturedProjects] = useState();
  const [role, setRole] = useState("");
  const [alert, setAlert] = useState({ isAlert: false, alertMessage: "" });
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("Featured Projects");

  useEffect(() => {
    setSearch("");
  }, [tab]);

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
        search,
        setSearch,
        tab,
        setTab,
        synergies,
        setSynergies,
        featuredProjects,
        setFeaturedProjects,
        pendingSynergies,
        setPendingSynergies,
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
