import Image from "next/image";
import memoImage from "../../../../public/images/memo.svg";
import { useEffect, useRef } from "react";

interface TodoMemoInputProps {
  todoMemo: string;
  setTodoMemo: (value: string) => void;
}

const TodoMemoInput = ({ todoMemo, setTodoMemo }: TodoMemoInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 229)}px`;
    }
  }, [todoMemo]);

  const onChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoMemo(e.target.value);

    const textarea = e.target;
    textarea.style.height = "auto";
    console.log("초기화 후 높이:", textarea.style.height);
    textarea.style.height = `${Math.min(textarea.scrollHeight, 229)}px`;
    console.log("변경된 높이:", textarea.style.height);
  };

  return (
    <div className="relative w-full desktop:max-w-[589px] h-[311px] rounded-[24px] overflow-hidden">
      <Image src={memoImage} alt="" fill priority className="object-cover" />
      <div className="absolute w-full h-full px-[16px] py-[24px]">
        <p className="text-16-extrabold text-amber-800 text-center">Memo</p>
        <div className="w-full h-full flex items-center justify-center">
          <textarea
            ref={textareaRef}
            value={todoMemo ?? ""}
            onChange={onChangeMemo}
            className="w-full overflow-y-auto resize-none text-center bg-transparent outline-none"
            style={{ minHeight: "auto", maxHeight: "229px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoMemoInput;
