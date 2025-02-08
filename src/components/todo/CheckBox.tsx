import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Todo } from "@/types/todo";
import { updateTodo } from "@/apis/todoApi";
import checkbox from "../../../public/icons/checkbox.svg";
import checkbox_done from "../../../public/icons/checkbox_done.svg";

interface CheckBoxProps {
  id: number;
  isCompleted: boolean;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const CheckBox = ({ id, isCompleted, setTodos }: CheckBoxProps) => {
  const onToggleComplete = async (id: number, isCompleted: boolean) => {
    try {
      const updatedTodo = await updateTodo(id, { isCompleted: !isCompleted });
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (error) {
      console.error("할 일 완료 상태 변경 실패:", error);
      alert("❌ 할 일 상태 변경 중 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <button onClick={() => onToggleComplete(id, isCompleted ?? false)}>
      <Image
        src={isCompleted ? checkbox_done : checkbox}
        alt={isCompleted ? "완료된 할 일" : "할 일 미완료"}
      />
    </button>
  );
};

export default CheckBox;
