"use client";

import { useEffect } from "react";
import TodoList from "./TodoList";
import { useTodoStore } from "@/store/useTodoStore";

const TodoListContainer = () => {
  const { todos, fetchTodos } = useTodoStore();

  // 전체 할 일 목록을 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchTodos();
      } catch (error) {
        console.error("할 일 목록 가져오기 실패:", error);
        alert("❌ 할 일 목록을 가져오지 못했어요. 다시 시도해주세요.");
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pendingTodos = todos.filter((todo) => !todo.isCompleted); // 할 일 목록
  const doneTodos = todos.filter((todo) => todo.isCompleted); // 완료된 목록

  return (
    <div className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[24px] overflow-hidden">
      <TodoList status="todo" todos={pendingTodos} />
      <TodoList status="done" todos={doneTodos} />
    </div>
  );
};

export default TodoListContainer;
