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

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],

  fetchTodos: async () => {
    try {
      const items = await getTodos();
      set(() => ({ todos: items }));
    } catch (error) {
      throw error;
    }
  },

  addNewTodo: async (name) => {
    if (!name.trim()) return;

    try {
      const newTodo = await addTodo(name);
      set((state) => ({ todos: [newTodo, ...state.todos] }));
    } catch (error) {
      throw error;
    }
  },

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
