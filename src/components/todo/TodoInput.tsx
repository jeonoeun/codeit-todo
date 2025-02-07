"use client";

import clsx from "clsx";
import { useState } from "react";

interface TodoInputProps {
  mode: "list" | "detail" | "add";
  value: string;
  checked?: boolean;
}

const TodoInput = ({ mode, value, checked }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState(value);

  const onTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={onTodoInputChange}
      placeholder={mode === "add" ? "할 일을 입력해주세요" : undefined}
      className={clsx(
        "input-base",
        mode === "list" && checked && "line-through",
        mode === "detail" && "input-detail"
      )}
    />
  );
};

export default TodoInput;
