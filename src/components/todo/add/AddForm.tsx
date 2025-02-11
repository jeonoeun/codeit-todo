"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import plus_black from "../../../../public/icons/plus_black.svg";
import plus from "../../../../public/icons/plus.svg";
import { useTodoStore } from "@/store/useTodoStore";
import AddInput from "./AddInput";

const AddForm = () => {
  const { addNewTodo } = useTodoStore();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addNewTodo(inputValue);
      setInputValue("");
    } catch (error) {
      console.error("할 일 추가 중 오류 발생:", error);
      alert("❌ 할 일을 추가하는 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="flex items-center gap-[8px] tablet:gap-[16px] mb-[24px] tablet:mb-[40px]"
    >
      <AddInput name={inputValue} onChange={setInputValue} />
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
