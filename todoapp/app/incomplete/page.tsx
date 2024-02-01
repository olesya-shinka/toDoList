"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Todos from "../Components/Todos/Todos";

function page() {
  const { incompleteTasks } = useGlobalState();
  return <Todos title="В процессе" tasks={incompleteTasks} />;
}

export default page;
