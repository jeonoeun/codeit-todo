import AddTodoBar from "./AddTodoBar";
import TodoList from "./TodoList";

const todos = [
  { id: 1, text: "비타민 챙겨먹기", checked: true },
  { id: 2, text: "개발하기", checked: true },
  { id: 3, text: "더보이즈 콘서트 가기", checked: true },
  { id: 4, text: "밥 먹기", checked: true },
];

const TodoContainer = () => {
  const pendingTodos = todos.filter((todo) => !todo.checked);
  const doneTodos = todos.filter((todo) => todo.checked);

  return (
    <>
      <AddTodoBar />
      <div className="flex flex-col tablet:flex-row gap-[48px] tablet:gap-[24px]">
        <TodoList status="todo" todos={pendingTodos} />
        <TodoList status="done" todos={doneTodos} />
      </div>
    </>
  );
};

export default TodoContainer;
