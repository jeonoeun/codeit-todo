"use client";

import { useEffect, useState } from "react";
import { getTodos } from "@/apis/todoApi";
import { Todo } from "@/types/todo";
import AddTodoForm from "./add/AddTodoForm";
import TodoList from "./list/TodoList";

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
      <AddTodoForm setTodos={setTodos} />
      <div className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[24px] overflow-hidden">
        <TodoList status="todo" todos={pendingTodos} setTodos={setTodos} />
        <TodoList status="done" todos={doneTodos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default TodoContainer;
