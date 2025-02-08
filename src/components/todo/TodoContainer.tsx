"use client";

import { useEffect, useState } from "react";
import AddTodoBar from "./AddTodoBar";
import TodoList from "./TodoList";
import { getTodos } from "@/apis/todoApi";
import { Todo } from "@/types/todo";

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const items = await getTodos();
      setTodos(items);
    } catch (error) {
      console.error("❌ 할 일 목록 가져오기 실패:", error);
      alert("할 일 목록 가져오기에 실패했습니다. 다시 시도해주세요.");
      setTodos([]);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const pendingTodos = todos.filter((todo) => !todo.isCompleted);
  const doneTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <>
      <AddTodoBar setTodos={setTodos} />
      <div className="flex flex-col tablet:flex-row gap-[48px] tablet:gap-[24px]">
        <TodoList status="todo" todos={pendingTodos} />
        <TodoList status="done" todos={doneTodos} />
      </div>
    </>
  );
};

export default TodoContainer;
