"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import plus_black from "../../../../public/icons/plus_black.svg";
import plus from "../../../../public/icons/plus.svg";
import { useTodoStore } from "@/store/useTodoStore";
import AddInput from "./AddInput";

const AddForm = () => {
  const { addNewTodo } = useTodoStore(); // 전역 상태에서 할 일 추가 함수 가져오기
  const [inputValue, setInputValue] = useState(""); // 입력값 상태 관리

  // 폼 제출 함수
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addNewTodo(inputValue);
      setInputValue(""); // 할 일 추가 성공 시 입력 필드 초기화
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
      {/* 할 일 입력 필드 */}
      <AddInput name={inputValue} onChange={setInputValue} />

      {/* 추가 버튼 (입력값에 따라 아이콘 및 스타일 변경) */}
      <Button
        type="submit"
        shape="square"
        text="추가하기"
        icon={inputValue.trim() ? plus : plus_black}
        variant={inputValue.trim() ? "violet" : "slate"} // 입력값 유무에 따라 버튼 색상 변경
        border
        responsive
        disabled={!inputValue.trim()} // 입력값이 없으면 비활성화
      />
    </form>
  );
};

export default AddForm;
