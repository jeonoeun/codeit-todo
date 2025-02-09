"use client";

import Image from "next/image";
import checkbox from "../../../public/icons/checkbox.svg";
import checkbox_done from "../../../public/icons/checkbox_done.svg";

interface CheckBoxProps {
  isCompleted: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CheckBox = ({ isCompleted, onClick }: CheckBoxProps) => {
  return (
    <button type="button" onClick={onClick}>
      <Image
        src={isCompleted ? checkbox_done : checkbox}
        alt={isCompleted ? "완료된 할 일" : "할 일 미완료"}
      />
    </button>
  );
};

export default CheckBox;
