import Image from "next/image";
import TodoItem from "./TodoItem";
import EmptyList from "./EmptyList";

import done from "../../../public/images/done.svg";
import todo from "../../../public/images/todo.svg";

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface TodoListProps {
  status: "todo" | "done";
  todos: Todo[];
}

const TodoList = ({ status, todos }: TodoListProps) => {
  return (
    <div className="flex-1">
      <Image
        src={status === "todo" ? todo : done}
        alt=""
        width={status === "todo" ? 101 : 97}
        height={36}
        priority
        className="mb-[16px]"
      />

      <ul className="flex flex-col gap-[16px]">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem mode="list" {...todo} />
          </li>
        ))}
      </ul>

      {todos.length === 0 && <EmptyList status={status} />}
    </div>
  );
};

export default TodoList;
