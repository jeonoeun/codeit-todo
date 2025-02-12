"use client";

import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import EditInput from "./EditInput";
import ImageInput from "./ImageInput";
import MemoInput from "./MemoInput";
import EditActions from "./EditActions";
import { useTodos } from "@/hooks/useTodos";

// 할 일 수정 폼
const EditForm = ({ id, name, memo, imageUrl, isCompleted }: Todo) => {
  const { updateTodoItem } = useTodos(); // 할 일 수정 함수 가져오기

  // 할 일의 상태값 관리
  const [todoName, setTodoName] = useState(name);
  const [todoMemo, setTodoMemo] = useState(memo);
  const [todoImageUrl, setTodoImageUrl] = useState(imageUrl);
  const [isTodoCompleted, setIsTodoCompleted] = useState(isCompleted);
  const [isModified, setIsModified] = useState(false);

  // 입력된 값이 기존 값과 다른지 확인하여 `isModified` 상태 업데이트
  useEffect(() => {
    const isChanged =
      todoName !== name ||
      todoMemo !== memo ||
      todoImageUrl !== imageUrl ||
      isTodoCompleted !== isCompleted;

    setIsModified(isChanged);
  }, [
    todoName,
    todoMemo,
    todoImageUrl,
    isTodoCompleted,
    name,
    memo,
    imageUrl,
    isCompleted,
  ]);

  // 할 일 수정 폼 제출 함수
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isModified) return; // 변경된 내용이 없으면 return

    // 변경된 값을 updatedTodo에 저장
    const updatedTodo = {
      name: todoName,
      memo: todoMemo ?? "",
      imageUrl: todoImageUrl ?? "",
      isCompleted: isTodoCompleted,
    };

    const confirmDelete = window.confirm("수정한 내용을 저장할까요?");
    if (!confirmDelete) return;

    await updateTodoItem(id, updatedTodo); // 수정된 할 일을 업데이트
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[16px] tablet:gap-[24px]"
    >
      {/* 제목, 완료 상태 여부 수정/입력 필드 */}
      <EditInput
        name={todoName}
        isCompleted={isTodoCompleted}
        setIsTodoCompleted={setIsTodoCompleted}
        onChange={setTodoName}
      />

      {/* 메모, 이미지 URL 수정/입력 필드 */}
      <div className="flex flex-col desktop:flex-row items-center justify-between gap-[16px]">
        <ImageInput imageUrl={todoImageUrl} setImageUrl={setTodoImageUrl} />
        <MemoInput memo={todoMemo ?? ""} setMemo={setTodoMemo} />
      </div>

      {/* 수정 완료 및 삭제 버튼 */}
      <EditActions id={id} disabled={!isModified || todoName.trim() === ""} />
    </form>
  );
};

export default EditForm;
