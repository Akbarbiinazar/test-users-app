import React from "react";
import { cn } from "@/shared/lib/tailwind-merge"; 

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  isLoading,
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-500",
        props.disabled && "cursor-not-allowed",
        className
      )}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};
