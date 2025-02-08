"use client";

import clsx from "clsx";

interface InputProps {
  mode: "list" | "detail" | "add";
  text: string;
  isCompleted?: boolean;
  onChange?: (value: string) => void;
}

const Input = ({ mode, text, isCompleted, onChange }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder={mode === "add" ? "할 일을 입력해주세요" : undefined}
      className={clsx(
        "input-base",
        mode === "list" && isCompleted && "line-through",
        mode === "detail" && "input-detail"
      )}
    />
  );
};

export default Input;
