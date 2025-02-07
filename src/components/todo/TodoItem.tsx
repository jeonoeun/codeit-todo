import Image from "next/image";
import TodoInput from "./TodoInput";

import checkbox from "../../../public/icons/checkbox.svg";
import checkbox_done from "../../../public/icons/checkbox_done.svg";
import clsx from "clsx";

interface TodoItemProps {
  mode: "list" | "detail" | "add";
  value: string;
  checked?: boolean;
}

const TodoItem = ({ mode, value, checked }: TodoItemProps) => {
  const bgColor =
    mode === "add" ? "bg-slate-100" : checked ? "bg-violet-100" : "bg-white";

  return (
    <div className={clsx("todo-item", `todo-${mode}`, bgColor)}>
      {mode !== "add" && (
        <button>
          <Image
            src={checked ? checkbox_done : checkbox}
            alt={checked ? "완료된 할 일" : "할 일 미완료"}
          />
        </button>
      )}
      <TodoInput mode={mode} value={value} checked={checked} />
    </div>
  );
};

export default TodoItem;
