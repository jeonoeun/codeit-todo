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

  // 할 일 완료 상태 토글 핸들러
  const handleToggleStatus = async (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모 요소의 클릭 이벤트 방지

    try {
      await toggleTodoStatus(todo.id, !todo.isCompleted); // 상태 토글 API 호출
    } catch (error) {
      console.error("할 일 상태 변경 중 오류 발생:", error);
      alert("❌ 할 일 상태 변경 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
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
