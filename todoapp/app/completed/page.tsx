"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Todos from "../Components/Todos/Todos";

function page() {
  const { completedTasks } = useGlobalState();

  return <Todos title="Выполненные задачи" tasks={completedTasks} />;
}

export default page;
