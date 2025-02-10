"use client";

import { Todo } from "@/types/todo";
import { useState } from "react";
import TodoEditInput from "./TodoEditInput";
import { updateTodo } from "@/apis/todoApi";
import { useRouter } from "next/navigation";
import TodoImageInput from "./TodoImageInput";
import TodoMemoInput from "./TodoMemoInput";
import TodoEditActions from "./TodoEditActions";

const EditTodoForm = ({ id, name, memo, imageUrl, isCompleted }: Todo) => {
  const router = useRouter();
  const [todoName, setTodoName] = useState(name);
  const [todoMemo, setTodoMemo] = useState(memo ?? "");
  const [todoImageUrl, setTodoImageUrl] = useState(imageUrl);
  const [isTodoCompleted, setIsTodoCompleted] = useState(isCompleted);

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedTodo = {
      name: todoName,
      memo: todoMemo,
      imageUrl: todoImageUrl ?? "",
      isCompleted: isTodoCompleted,
    };

    const confirmDelete = window.confirm("수정한 내용을 저장할까요?");
    if (!confirmDelete) return;

    try {
      await updateTodo(id, updatedTodo);
      alert("✅ 할 일이 수정되었습니다!");
      router.push("/");
    } catch (error) {
      console.error("❌ 업데이트 중 오류 발생:", error);
      alert("❌ 수정 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className="flex flex-col gap-[16px] tablet:gap-[24px]"
    >
      <TodoEditInput
        name={todoName}
        isCompleted={isTodoCompleted}
        setIsTodoCompleted={setIsTodoCompleted}
        onChange={setTodoName}
      />
      <div className="flex flex-col desktop:flex-row items-center justify-between gap-[16px]">
        <TodoImageInput
          todoImageUrl={todoImageUrl}
          setTodoImageUrl={setTodoImageUrl}
        />
        <TodoMemoInput todoMemo={todoMemo} setTodoMemo={setTodoMemo} />
      </div>
      <TodoEditActions id={id} />
    </form>
  );
};

export default EditTodoForm;
