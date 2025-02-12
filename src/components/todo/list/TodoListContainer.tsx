"use client";

import { useEffect } from "react";
import TodoList from "./TodoList";
import { useTodoStore } from "@/store/useTodoStore";
import { useTodos } from "@/hooks/useTodos";

const TodoListContainer = () => {
  const { fetchTodos } = useTodos();
  const todos = useTodoStore((state) => state.todos);

  // 전체 할 일 목록 불러오기
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

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
