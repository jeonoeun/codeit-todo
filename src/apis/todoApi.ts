import { Todo } from "@/types/todo";

const BASE_URL = "https://assignment-todolist-api.vercel.app/api";
const TENANT_ID = "jeonoeun";

export const getTodos = async (pageNum: number): Promise<Todo[]> => {
  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items?page=${pageNum}`, {
      method: "GET",
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

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (
  id: number,
  updates: Partial<Todo>
): Promise<Todo> => {
  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(errorMessage);
    }

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const getTodoById = async (id: number) => {
  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items/${id}`, {
      method: "GET",
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

export const deleteTodo = async (id: number) => {
  try {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items/${id}`, {
      method: "DELETE",
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
