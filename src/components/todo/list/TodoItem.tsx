import { Dispatch, SetStateAction } from "react";
import { Todo } from "@/types/todo";
import { useRouter } from "next/navigation";
import { updateTodo } from "@/apis/todoApi";
import CheckBox from "@/components/common/CheckBox";

interface TodoItemProps {
  todo: Todo;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, setTodos }: TodoItemProps) => {
  const router = useRouter();

  const toggleTodoStatus = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    try {
      const updatedTodo = await updateTodo(todo.id!, {
        isCompleted: !todo.isCompleted,
      });
      setTodos((prevTodos) =>
        prevTodos.map((prevTodo) =>
          prevTodo.id === todo.id ? updatedTodo : prevTodo
        )
      );
    } catch (error) {
      console.error("할 일 완료 상태 변경 실패:", error);
      alert("❌ 할 일 상태 변경 중 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <div
      onClick={() => router.push(`/items/${todo.id}`)}
      className={`todo-item todo-list ${
        todo.isCompleted ? "bg-violet-100" : "bg-white"
      }`}
    >
      <CheckBox isCompleted={todo.isCompleted} onClick={toggleTodoStatus} />
      <span
        className={`truncate w-full ${todo.isCompleted ? "line-through" : ""}`}
      >
        {todo.name}
      </span>
    </div>
  );
};

export default TodoItem;
