import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import check from "../../../../public/icons/check.svg";
import x from "../../../../public/icons/X.svg";
import { useTodoStore } from "@/store/useTodoStore";

interface EditActionsProps {
  id: number;
  disabled?: boolean;
}

const EditActions = ({ id, disabled }: EditActionsProps) => {
  const router = useRouter();
  const { deleteTodoItem } = useTodoStore();

  // 할 일 삭제 핸들러
  const handleDeleteTodo = async () => {
    const confirmDelete = window.confirm("할 일을 삭제할까요?");
    if (!confirmDelete) return;

    try {
      await deleteTodoItem(id); // 할 일 삭제
      router.push("/"); // 홈으로 이동
    } catch (error) {
      console.error("할 일 삭제 중 오류 발생:", error);
      alert("❌ 할 일을 삭제하는 중에 오류가 발생했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="flex items-center justify-center desktop:justify-end gap-[7px] tablet:gap-[16px]">
      {/* 수정 완료 버튼 */}
      <Button
        type="submit"
        shape="square"
        text="수정 완료"
        icon={check}
        variant={disabled ? "slate" : "lime"} // 비활성화 여부에 따라 스타일 변경
        border
        disabled={disabled}
      />
      {/* 삭제 버튼 */}
      <Button
        type="button"
        shape="square"
        onClick={handleDeleteTodo}
        text="삭제하기"
        icon={x}
        variant="rose"
        border
      />
    </div>
  );
};

export default EditActions;
