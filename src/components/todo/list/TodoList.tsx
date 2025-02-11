import Image from "next/image";
import { Todo } from "@/types/todo";
import done from "../../../../public/images/done.svg";
import todo from "../../../../public/images/todo.svg";
import EmptyList from "./EmptyList";
import TodoItem from "./TodoItem";

interface TodoListProps {
  status: "todo" | "done";
  todos: Todo[];
}

const TodoList = ({ status, todos }: TodoListProps) => {
  return (
    <div>
      {/* 상태에 따른 헤더 이미지 표시 */}
      <Image
        src={status === "todo" ? todo : done}
        alt=""
        width={status === "todo" ? 101 : 97}
        height={36}
        priority
        className="mb-[16px]"
      />

      {/* 할 일 목록 */}
      <ul className="flex flex-col gap-[16px]">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>

      {/* 목록이 비어 있을 경우 빈 목록 UI 표시 */}
      {todos.length === 0 && <EmptyList status={status} />}
    </div>
  );
};

export default TodoList;
