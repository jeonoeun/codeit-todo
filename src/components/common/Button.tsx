"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface ButtonProps {
  type: "submit" | "button";
  text?: string;
  icon: StaticImageData;
  variant: "slate" | "violet" | "rose" | "lime" | "dark";
  border?: boolean;
}

const Button = ({ type, text, icon, variant, border }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={() => {}}
      className={clsx(
        "btn-base",
        `btn-${variant}`,
        type === "submit"
          ? "w-[168px] h-[56px] shadow-[4px_4px_0px_#0F172A]"
          : "w-[64px] h-[64px]",
        text && "gap-1",
        border && "border-2 border-slate-900"
      )}
    >
      <Image src={icon} alt={text ? `${text} 아이콘` : "버튼 아이콘"} />
      {text}
    </button>
  );
};

export default Button;
