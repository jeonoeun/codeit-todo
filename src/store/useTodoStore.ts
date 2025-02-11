import { addTodo, deleteTodo, getTodos, updateTodo } from "@/apis/todoApi";
import { Todo } from "@/types/todo";
import { create } from "zustand";

interface TodoState {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  addNewTodo: (name: string) => Promise<void>;
  toggleTodoStatus: (id: number, isCompleted: boolean) => Promise<void>;
  deleteTodoItem: (id: number) => Promise<void>;
  updateTodoItem: (id: number, updatedData: Partial<Todo>) => Promise<void>;
}

// 할 일 상태를 관리하는 Zustand Store (Api 호출은 hooks로 분리 예정)
export const useTodoStore = create<TodoState>((set) => ({
  todos: [], // 할 일 목록

  // 할 일 목록 불러오기
  fetchTodos: async () => {
    let allTodos: Todo[] = [];
    let pageNum = 1;
    let hasMore = true;
    const pageSize = 10;

    // 페이지네이션을 사용하여 모든 할 일을 가져옴
    try {
      while (hasMore) {
        const newTodos = await getTodos(pageNum);
        allTodos = [...allTodos, ...newTodos];

        // 추가 데이터가 있으면 계속 요청
        if (newTodos.length < pageSize) {
          hasMore = false;
        } else {
          pageNum += 1;
        }
      }
      // 가져온 할 일을 상태에 저장
      set({ todos: allTodos });
    } catch (error) {
      throw error;
    }
  },

  // 새로운 할 일 추가
  addNewTodo: async (name) => {
    if (!name.trim()) return;

    try {
      const newTodo = await addTodo(name);
      set((state) => ({ todos: [newTodo, ...state.todos] }));
    } catch (error) {
      throw error;
    }
  },

  // 완료 상태 변경
  toggleTodoStatus: async (id, isCompleted) => {
    try {
      const updatedTodo = await updateTodo(id, { isCompleted });
      set((state) => ({
        todos: state.todos.map((todo) => (todo.id === id ? updatedTodo : todo)),
      }));
    } catch (error) {
      throw error;
    }
  },

  // 할 일 삭제
  deleteTodoItem: async (id) => {
    try {
      await deleteTodo(id);
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    } catch (error) {
      throw error;
    }
  },

  // 할 일 상세 정보 수정
  updateTodoItem: async (id, updatedData) => {
    try {
      const updatedTodo = await updateTodo(id, updatedData);
      set((state) => ({
        todos: state.todos.map((todo) => (todo.id === id ? updatedTodo : todo)),
      }));
    } catch (error) {
      throw error;
    }
  },
}));
