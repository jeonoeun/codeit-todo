"use client";

import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EditInput from "./EditInput";
import ImageInput from "./ImageInput";
import MemoInput from "./MemoInput";
import EditActions from "./EditActions";
import { useTodoStore } from "@/store/useTodoStore";

const EditForm = ({ id, name, memo, imageUrl, isCompleted }: Todo) => {
  const router = useRouter();
  const { updateTodoItem } = useTodoStore();
  const [todoName, setTodoName] = useState(name);
  const [todoMemo, setTodoMemo] = useState(memo);
  const [todoImageUrl, setTodoImageUrl] = useState(imageUrl);
  const [isTodoCompleted, setIsTodoCompleted] = useState(isCompleted);
  const [isModified, setIsModified] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isModified) return;

    const updatedTodo = {
      name: todoName,
      memo: todoMemo,
      imageUrl: todoImageUrl ?? "",
      isCompleted: isTodoCompleted,
    };

    const confirmDelete = window.confirm("수정한 내용을 저장할까요?");
    if (!confirmDelete) return;

    try {
      await updateTodoItem(id, updatedTodo);
      alert("✅ 할 일이 수정되었습니다!");
      router.push("/");
    } catch (error) {
      console.error("할 일 수정 중 오류 발생:", error);
      alert("❌ 할 일 수정 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[16px] tablet:gap-[24px]"
    >
      <EditInput
        name={todoName}
        isCompleted={isTodoCompleted}
        setIsTodoCompleted={setIsTodoCompleted}
        onChange={setTodoName}
      />
      <div className="flex flex-col desktop:flex-row items-center justify-between gap-[16px]">
        <ImageInput imageUrl={todoImageUrl} setImageUrl={setTodoImageUrl} />
        <MemoInput memo={todoMemo ?? ""} setMemo={setTodoMemo} />
      </div>
      <EditActions id={id} isModified={isModified} />
    </form>
  );
};

export default EditForm;
