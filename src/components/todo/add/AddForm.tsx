"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { addTodo } from "@/apis/todoApi";
import { Todo } from "@/types/todo";
import TodoAddInput from "./AddInput";
import Button from "@/components/common/Button";
import plus_black from "../../../../public/icons/plus_black.svg";
import plus from "../../../../public/icons/plus.svg";

interface AddFormProps {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const AddForm = ({ setTodos }: AddFormProps) => {
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
      alert("❌ 할 일을 추가하는 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="flex items-center gap-[8px] tablet:gap-[16px] mb-[24px] tablet:mb-[40px]"
    >
      <TodoAddInput name={inputValue} onChange={setInputValue} />
      <Button
        type="submit"
        shape="square"
        text="추가하기"
        icon={inputValue.trim() ? plus : plus_black}
        variant={inputValue.trim() ? "violet" : "slate"}
        border
        responsive
        disabled={!inputValue.trim()}
      />
    </form>
  );
};

export default AddForm;
