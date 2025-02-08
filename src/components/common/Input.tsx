"use client";

import { useState } from "react";
import clsx from "clsx";

interface InputProps {
  mode: "list" | "detail" | "add";
  text: string;
  checked?: boolean;
}

const Input = ({ mode, text, checked }: InputProps) => {
  const [inputValue, setInputValue] = useState(text);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder={mode === "add" ? "할 일을 입력해주세요" : undefined}
      className={clsx(
        "input-base",
        mode === "list" && checked && "line-through",
        mode === "detail" && "input-detail"
      )}
    />
  );
};

export default Input;
