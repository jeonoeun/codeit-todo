import { Todo } from "@/types/todo";
import { create } from "zustand";

interface TodoState {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

// 할 일 상태를 관리하는 store
export const useTodoStore = create<TodoState>((set) => ({
  todos: [], // 할 일 목록
  setTodos: (todos) => set({ todos }), // API 호출 후 상태 업데이트를 위한 함수
}));
