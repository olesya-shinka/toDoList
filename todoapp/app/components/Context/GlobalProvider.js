"use client";
import React, { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalStateUpdate = () => useContext(GlobalUpdateContext);
