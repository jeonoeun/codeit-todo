"use client";

import Image, { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";
import clsx from "clsx";

interface ButtonProps {
  type: "submit" | "button";
  shape: "square" | "circle";
  text?: string;
  icon: StaticImageData;
  variant: "slate" | "violet" | "rose" | "lime" | "dark";
  border?: boolean;
  responsive?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  type = "button",
  shape,
  text,
  icon,
  variant,
  border,
  responsive,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "btn-base",
        `btn-${variant} btn-${shape}`,
        text ? "gap-1" : "",
        border && "border-2 border-slate-900",
        responsive && shape === "square" && "btn-responsive",
        disabled && "cursor-not-allowed"
      )}
    >
      <Image src={icon} alt={text ? `${text} 아이콘` : "버튼 아이콘"} />
      {text && (
        <span className={clsx(responsive && "hidden tablet:block")}>
          {text}
        </span>
      )}
    </button>
  );
};

export default Button;
