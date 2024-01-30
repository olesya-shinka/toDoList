"use client";
import React, { useState } from "react";
import { GlobalProvider } from "../components/Context/GlobalProvider";

interface Props {
  children: React.ReactNode;
}

function Context({ children }: Props) {
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

export default Context;
