import Button from "../common/Button";
import TodoItem from "./TodoItem";

import plus_black from "../../../public/icons/plus_black.svg";

const AddTodoBar = () => {
  return (
    <form
      action=""
      className="flex items-center gap-[8px] tablet:gap-[16px] mb-[24px] tablet:mb-[40px]"
    >
      <TodoItem mode="add" text="" />
      <Button
        type="submit"
        text="추가하기"
        icon={plus_black}
        variant="slate"
        border
      />
    </form>
  );
};

export default AddTodoBar;
