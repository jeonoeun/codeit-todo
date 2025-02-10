import { deleteTodo } from "@/apis/todoApi";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import check from "../../../../public/icons/check.svg";
import x from "../../../../public/icons/X.svg";

interface TodoEditActionsProps {
  id: number;
  isModified: boolean;
}

const TodoEditActions = ({ id, isModified }: TodoEditActionsProps) => {
  const router = useRouter();

  const onDeleteTodo = async () => {
    const confirmDelete = window.confirm("할 일을 삭제할까요?");
    if (!confirmDelete) return;

    try {
      await deleteTodo(id);
      router.push("/");
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
      alert("❌ 삭제하는 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="flex items-center justify-center desktop:justify-end gap-[7px] tablet:gap-[16px]">
      <Button
        type="submit"
        shape="square"
        text="수정 완료"
        icon={check}
        variant={isModified ? "lime" : "slate"}
        border
        disabled={!isModified}
      />
      <Button
        type="button"
        shape="square"
        onClick={onDeleteTodo}
        text="삭제하기"
        icon={x}
        variant="rose"
        border
      />
    </div>
  );
};

export default TodoEditActions;
