import Todos from "./components/Todos/Todos";
import { useGlobalState } from "./context/GlobalProvider";

export default function Home() {
  const { todos } = useGlobalState();
  return <Todos />;
}
