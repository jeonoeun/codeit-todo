import { getTodos } from "@/apis/todoApi";
import { Todo } from "@/types/todo";
import { create } from "zustand";

interface TodoState {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],

  fetchTodos: async () => {
    try {
      const items = await getTodos();
      set({ todos: items });
    } catch (error) {
      console.error("❌ 할 일 목록 가져오기 실패:", error);
      alert("할 일 목록 가져오기에 실패했습니다. 다시 시도해주세요.");
    }
  },
}));
