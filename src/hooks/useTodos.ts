import { addTodo, deleteTodo, getTodos, updateTodo } from "@/apis/todoApi";
import { useTodoStore } from "@/store/useTodoStore";
import { Todo } from "@/types/todo";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const useTodos = () => {
  const { todos, setTodos } = useTodoStore();
  const [inputValue, setInputValue] = useState(""); // 입력값 상태 관리
  const router = useRouter();

  // 할 일 목록 불러오기
  const fetchTodos = useCallback(async () => {
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
        if (newTodos.length < pageSize) hasMore = false;
        else pageNum += 1;
      }

      setTodos(allTodos); // 가져온 할 일을 상태에 저장
    } catch (error) {
      console.error("할 일 목록 가져오기 실패:", error);
      alert("❌ 할 일 목록을 가져오지 못했어요. 다시 시도해주세요.");
    }
  }, [setTodos]);

  // 새로운 할 일 추가
  const addNewTodo = async () => {
    if (!inputValue.trim()) return;

    try {
      const newTodo = await addTodo(inputValue);
      setTodos([newTodo, ...todos]);
      setInputValue(""); // 할 일 추가 성공 시 입력 필드 초기화
    } catch (error) {
      console.error("할 일 추가 중 오류 발생:", error);
      alert("❌ 할 일을 추가하는 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  // 할 일 완료 상태 변경
  const toggleTodoStatus = async (id: number, isCompleted: boolean) => {
    try {
      const updatedTodo = await updateTodo(id, { isCompleted });
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error("할 일 상태 변경 중 오류 발생:", error);
      alert("❌ 할 일 상태 변경 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  // 할 일 상세 정보 수정
  const updateTodoItem = async (id: number, updatedTodo: Partial<Todo>) => {
    try {
      const updatedItem = await updateTodo(id, updatedTodo);
      setTodos(todos.map((todo) => (todo.id === id ? updatedItem : todo)));
      router.push("/");
    } catch (error) {
      console.error("할 일 수정 중 오류 발생:", error);
      alert("❌ 할 일 수정 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  // 할 일 삭제
  const deleteTodoItem = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      router.push("/"); // 삭제 후 홈으로 이동
    } catch (error) {
      console.error("할 일 삭제 중 오류 발생:", error);
      alert("❌ 할 일을 삭제하는 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return {
    fetchTodos,
    addNewTodo,
    toggleTodoStatus,
    updateTodoItem,
    deleteTodoItem,
    inputValue,
    setInputValue,
  };
};
