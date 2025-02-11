import { Todo } from "@/types/todo";

const BASE_URL = "https://assignment-todolist-api.vercel.app/api";
const TENANT_ID = "jeonoeun";

// 할 일 목록을 가져오는 함수
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

// 새로운 할 일을 추가하는 함수
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

// 할 일의 상세 정보를 가져오는 함수
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

// 할 일의 상세 정보를 수정하는 함수
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

// 할 일을 삭제하는 함수
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
