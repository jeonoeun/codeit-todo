"use client";

import { useEffect } from "react";
import TodoList from "./list/TodoList";
import AddForm from "./add/AddForm";
import { useTodoStore } from "@/store/useTodoStore";

const TodoContainer = () => {
  const { todos, fetchTodos } = useTodoStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchTodos();
      } catch (error) {
        console.error("할 일 목록 가져오기 실패:", error);
        alert(
          "❌ 할 일 목록을 불러오는 중에 오류가 발생했어요. 다시 시도해주세요."
        );
      }
    };

    fetchData();
  }, [fetchTodos]);

  const pendingTodos = todos.filter((todo) => !todo.isCompleted);
  const doneTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <>
      <AddForm />
      <div className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[24px] overflow-hidden">
        <TodoList status="todo" todos={pendingTodos} />
        <TodoList status="done" todos={doneTodos} />
      </div>
    </>
  );
};

export default TodoContainer;
