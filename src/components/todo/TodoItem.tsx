import Image from "next/image";
import Input from "../common/Input";
import clsx from "clsx";

import checkbox from "../../../public/icons/checkbox.svg";
import checkbox_done from "../../../public/icons/checkbox_done.svg";

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
      <Input mode={mode} value={value} checked={checked} />
    </div>
  );
};

export default TodoItem;
