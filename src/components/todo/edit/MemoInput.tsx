import Image from "next/image";
import memoImage from "../../../../public/images/memo.svg";
import { useEffect, useRef } from "react";

interface MemoInputProps {
  memo: string;
  setMemo: (value: string) => void;
}

const MemoInput = ({ memo, setMemo }: MemoInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null); // textarea 요소 참조

  // 메모 입력 필드의 높이를 자동으로 조절. 메모 값이 변경될 때마다 실행됨.
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 229)}px`;
    }
  }, [memo]);

  // 메모 입력값 변경 함수
  const onChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);

    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 229)}px`;
  };

  return (
    <div className="relative w-full desktop:max-w-[589px] h-[311px] rounded-[24px] overflow-hidden">
      <Image src={memoImage} alt="" fill priority className="object-cover" />
      <div className="absolute w-full h-full px-[16px] py-[24px]">
        <p className="text-16-extrabold text-amber-800 text-center">Memo</p>
        <div className="w-full h-full flex items-center justify-center">
          <textarea
            ref={textareaRef}
            value={memo ?? ""}
            onChange={onChangeMemo}
            className="w-full overflow-y-auto resize-none text-center bg-transparent outline-none"
            style={{ minHeight: "auto", maxHeight: "229px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MemoInput;
