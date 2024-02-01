"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Todos from "../Components/Todos/Todos";

function page() {
  const { importantTasks } = useGlobalState();
  return <Todos title="Важные задачи" tasks={importantTasks} />;
}

export default page;
