import { getTodoById } from "@/apis/todoApi";
import EditForm from "@/components/todo/edit/EditForm";

// 할 일의 상세 정보를 가져와 수정할 수 있는 컴포넌트
const TodoDetailPage = async ({
  params,
}: {
  params: Promise<{ itemId: number }>;
}) => {
  const { itemId } = await params;
  // params에서 받아온 itemId를 기반으로 해당 할 일의 상세 정보를 가져옴
  const todo = await getTodoById(itemId);

  return (
    <main className="wrapper py-0">
      <div className="container-layout bg-white desktop:py-[24px] min-h-main">
        <div className="max-w-[996px] mx-auto">
          <EditForm {...todo} />
        </div>
      </div>
    </main>
  );
};

export default TodoDetailPage;
