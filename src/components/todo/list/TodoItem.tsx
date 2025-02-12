import { Todo } from "@/types/todo";
import { useRouter } from "next/navigation";
import CheckBox from "@/components/common/CheckBox";
import { useTodos } from "@/hooks/useTodos";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const router = useRouter();
  const { toggleTodoStatus } = useTodos();

  // 할 일 완료 상태 토글 핸들러
  const handleToggleStatus = async (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모 요소의 클릭 이벤트 방지
    toggleTodoStatus(todo.id, !todo.isCompleted); // 상태 토글 API 호출
  };

  return (
    <div
      onClick={() => router.push(`/items/${todo.id}`)} // 상세 페이지로 이동
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
