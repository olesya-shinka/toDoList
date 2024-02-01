"use client";
import Todos from './Components/Todos/Todos'
import { useGlobalState } from "./context/globalProvider";

export default function Home() {
  const { tasks } = useGlobalState();

  return <Todos title="All Tasks" tasks={tasks} />;
}
