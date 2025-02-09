import { Dispatch, SetStateAction } from "react";
import CheckBox from "./CheckBox";
import { Todo } from "@/types/todo";
import { useRouter } from "next/navigation";

interface TodoListItemProps {
  todo: Todo;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoListItem = ({ todo, setTodos }: TodoListItemProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/items/${todo.id}`)}
      className={`todo-item todo-list ${
        todo.isCompleted ? "bg-violet-100" : "bg-white"
      }`}
    >
      <CheckBox {...todo} setTodos={setTodos} />
      <span className={`truncate w-full ${todo.isCompleted && "line-through"}`}>
        {todo.name}
      </span>
    </div>
  );
};

export default TodoListItem;
