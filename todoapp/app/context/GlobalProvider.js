"use client";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("api/tasks");
    } catch (error) {}
  };
  return (
    <GlobalContext.Provider value={state}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalStateUpdate = () => useContext(GlobalUpdateContext);
