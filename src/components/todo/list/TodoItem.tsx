import { Todo } from "@/types/todo";
import { useRouter } from "next/navigation";
import CheckBox from "@/components/common/CheckBox";
import { useTodoStore } from "@/store/useTodoStore";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const router = useRouter();
  const { toggleTodoStatus } = useTodoStore();

  const handleToggleStatus = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      await toggleTodoStatus(todo.id, !todo.isCompleted);
    } catch (error) {
      console.error("할 일 상태 변경 중 오류 발생:", error);
      alert("❌ 할 일 상태 변경 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <div
      onClick={() => router.push(`/items/${todo.id}`)}
      className={`todo-item todo-list ${
        todo.isCompleted ? "bg-violet-100" : "bg-white"
      }`}
    >
      <CheckBox isCompleted={todo.isCompleted} onClick={handleToggleStatus} />
      <span
        className={`truncate w-full ${todo.isCompleted ? "line-through" : ""}`}
      >
        {todo.name}
      </span>
    </div>
  );
};

export default TodoItem;
