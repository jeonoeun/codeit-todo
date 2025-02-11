import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import CheckBox from "@/components/common/CheckBox";
import Input from "@/components/common/Input";

interface EditInputProps {
  name: string;
  isCompleted: boolean;
  setIsTodoCompleted: Dispatch<SetStateAction<boolean>>;
  onChange: (value: string) => void;
}

const EditInput = ({
  name,
  isCompleted,
  setIsTodoCompleted,
  onChange,
}: EditInputProps) => {
  // 완료 상태를 토글하는 함수
  const toggleCompleted = () => {
    setIsTodoCompleted((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        "todo-item todo-detail",
        isCompleted ? "bg-violet-100" : "bg-white"
      )}
    >
      <CheckBox isCompleted={isCompleted} onClick={toggleCompleted} />
      <Input mode="detail" text={name} onChange={onChange} />
    </div>
  );
};

export default EditInput;
