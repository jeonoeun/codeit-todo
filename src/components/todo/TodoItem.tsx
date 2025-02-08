import clsx from "clsx";
import Input from "../common/Input";

import { Todo } from "@/types/todo";
import { Dispatch, SetStateAction } from "react";
import CheckBox from "./CheckBox";

interface TodoItemProps {
  mode: "list" | "detail" | "add";
  id?: number;
  name: string;
  isCompleted?: boolean;
  onChange?: (value: string) => void;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoItem = ({
  mode,
  id,
  name,
  isCompleted,
  onChange,
  setTodos,
}: TodoItemProps) => {
  return (
    <div
      className={clsx(
        "todo-item",
        `todo-${mode}`,
        mode === "add"
          ? "bg-slate-100"
          : isCompleted
          ? "bg-violet-100"
          : "bg-white"
      )}
    >
      {mode !== "add" && id !== undefined && isCompleted !== undefined && (
        <CheckBox id={id} isCompleted={isCompleted} setTodos={setTodos} />
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
