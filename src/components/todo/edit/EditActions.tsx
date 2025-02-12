import Button from "@/components/common/Button";
import check from "../../../../public/icons/check.svg";
import x from "../../../../public/icons/X.svg";
import { useTodos } from "@/hooks/useTodos";

interface EditActionsProps {
  id: number;
  disabled?: boolean;
}

const EditActions = ({ id, disabled }: EditActionsProps) => {
  const { deleteTodoItem } = useTodos();

  // 할 일 삭제 핸들러
  const handleDeleteTodo = async () => {
    const confirmDelete = window.confirm("할 일을 삭제할까요?");
    if (!confirmDelete) return;
    deleteTodoItem(id);
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
