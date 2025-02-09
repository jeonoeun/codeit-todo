import clsx from "clsx";
import Input from "../common/Input";
import CheckBox from "../todo/CheckBox";
import { Dispatch, SetStateAction } from "react";

interface TodoEditInputProps {
  name: string;
  isCompleted: boolean;
  setIsTodoCompleted: Dispatch<SetStateAction<boolean>>;
  onChange: (value: string) => void;
}

const TodoEditInput = ({
  name,
  isCompleted,
  setIsTodoCompleted,
  onChange,
}: TodoEditInputProps) => {
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

export default TodoEditInput;
