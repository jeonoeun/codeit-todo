import Image from "next/image";
import clsx from "clsx";
import Input from "../common/Input";

import checkbox from "../../../public/icons/checkbox.svg";
import checkbox_done from "../../../public/icons/checkbox_done.svg";

interface TodoItemProps {
  mode: "list" | "detail" | "add";
  name: string;
  isCompleted?: boolean;
  onChange?: (value: string) => void;
}

const TodoItem = ({ mode, name, isCompleted, onChange }: TodoItemProps) => {
  const bgColor =
    mode === "add"
      ? "bg-slate-100"
      : isCompleted
      ? "bg-violet-100"
      : "bg-white";

  return (
    <div className={clsx("todo-item", `todo-${mode}`, bgColor)}>
      {mode !== "add" && (
        <button>
          <Image
            src={isCompleted ? checkbox_done : checkbox}
            alt={isCompleted ? "완료된 할 일" : "할 일 미완료"}
          />
        </button>
      )}
      <Input
        mode={mode}
        text={name}
        isCompleted={isCompleted}
        onChange={onChange}
      />
    </div>
  );
};

export default TodoItem;
