"use client";

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface ButtonProps {
  type?: "submit" | "button";
  text?: string;
  icon?: StaticImageData;
  variant: "slate" | "violet" | "rose" | "lime" | "dark";
  border?: boolean;
}

const Button = ({
  type = "button",
  text,
  icon,
  variant,
  border,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={() => {}}
      className={clsx(
        "btn-base",
        `btn-${variant} btn-${type}`,
        text ? "gap-1" : "",
        border && "border-2 border-slate-900"
      )}
    >
      {icon && (
        <Image src={icon} alt={text ? `${text} 아이콘` : "버튼 아이콘"} />
      )}
      {text && <span className="hidden tablet:block">{text}</span>}
    </button>
  );
};

export default Button;
