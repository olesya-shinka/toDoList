"use client";
import React, { useState } from "react";
import { GlobalProvider } from "../context/GlobalProvider";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  const [isReady, setIsReady] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if (!isReady) {
    return null;
  }

  return <GlobalProvider>{children}</GlobalProvider>;
}

export default ContextProvider;
