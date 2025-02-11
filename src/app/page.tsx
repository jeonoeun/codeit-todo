import AddForm from "@/components/todo/add/AddForm";
import TodoListContainer from "@/components/todo/list/TodoListContainer";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="container-layout">
        <AddForm />
        <TodoListContainer />
      </div>
    </main>
  );
}
