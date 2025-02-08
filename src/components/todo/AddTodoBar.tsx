"use client";

import { useState } from "react";
import Button from "../common/Button";
import TodoItem from "./TodoItem";

import plus_black from "../../../public/icons/plus_black.svg";
import { addTodo } from "@/apis/todoApi";
import { Todo } from "@/types/todo";

interface AddTodoBarProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodoBar = ({ setTodos }: AddTodoBarProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    try {
      const todo = await addTodo(inputValue);
      setInputValue("");
      setTodos((prevTodos) => [todo, ...prevTodos]);
    } catch (error) {
      console.error("할 일 추가 실패:", error);
      alert("❌ 할 일을 추가하는 중 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="flex items-center gap-[8px] tablet:gap-[16px] mb-[24px] tablet:mb-[40px]"
    >
      <TodoItem mode="add" name={inputValue} onChange={setInputValue} />
      <Button
        type="submit"
        text="추가하기"
        icon={plus_black}
        variant="slate"
        border
      />
    </form>
  );
};

export default AddTodoBar;
