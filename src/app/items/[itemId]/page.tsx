import { getTodoById } from "@/apis/todoApi";
import EditTodoForm from "@/components/todo-detail/EditTodoForm";

const TodoDetailPage = async ({
  params,
}: {
  params: Promise<{ itemId: number }>;
}) => {
  const { itemId } = await params;
  const todo = await getTodoById(itemId);

  return (
    <main className="wrapper py-0">
      <div className="container-layout bg-white desktop:py-[24px] min-h-main">
        <div className="max-w-[996px] mx-auto">
          <EditTodoForm {...todo} />
        </div>
      </div>
    </main>
  );
};

export default TodoDetailPage;
