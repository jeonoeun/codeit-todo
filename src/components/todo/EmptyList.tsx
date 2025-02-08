import Image from "next/image";

import todo_large from "../../../public/images/empty/todo_large.svg";
import todo_small from "../../../public/images/empty/todo_small.svg";
import done_large from "../../../public/images/empty/done_large.svg";
import done_small from "../../../public/images/empty/done_small.svg";

interface EmptyListProps {
  status: "todo" | "done";
}

const EmptyList = ({ status }: EmptyListProps) => {
  const emptyListInfo = {
    todo: {
      text: "할 일이 없어요. \nTODO를 새롭게 추가해주세요!",
      images: { large: todo_large, small: todo_small },
    },
    done: {
      text: "아직 다 한 일이 없어요. \n해야 할 일을 체크해보세요!",
      images: { large: done_large, small: done_small },
    },
  };

  return (
    <div className="flex items-center justify-center desktop:py-[48px]">
      <div>
        <div className="relative w-[120px] h-[120px] mb-[16px] mx-auto tablet:w-[240px] tablet:h-[240px] tablet:mb-[24px]">
          {/* 기본 이미지 */}
          <Image
            src={emptyListInfo[status].images.large}
            alt=""
            fill
            priority
            className="object-cover hidden tablet:block"
          />

          {/* 모바일 이미지 */}
          <Image
            src={emptyListInfo[status].images.small}
            alt=""
            fill
            priority
            className="object-cover block tablet:hidden"
          />
        </div>

        {/* 텍스트 */}
        <p className="text-16-bold text-slate-400 text-center whitespace-pre-line">
          {emptyListInfo[status].text}
        </p>
      </div>
    </div>
  );
};

export default EmptyList;
