import { Todo } from "@/types/todo";

const BASE_URL = "https://assignment-todolist-api.vercel.app/api";
const TENANT_ID = "jeonoeun";

export const addTodo = async (name: string): Promise<Todo> => {
  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(errorMessage);
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
};
