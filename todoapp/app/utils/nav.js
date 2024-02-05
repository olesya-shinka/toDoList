import { list, check, todo, home } from "./Icons";

const nav = [
  {
    id: 1,
    title: "Все задачи",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Важные",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Выполненные",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "В процессе",
    icon: todo,
    link: "/incomplete",
  },
];

export default nav;
