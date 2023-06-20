"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="w-6 h-6 relative">
        <Image
          src={rightIcon}
          alt="rightIcon"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default CustomButton;
