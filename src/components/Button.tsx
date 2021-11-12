import React from "react";

type Variant = "primary" | "outline" | "secondary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  primary: "bg-green-400 text-white hover:bg-green-500 ring-green-100",
  outline: "bg-white text-green-400 hover:bg-gray-100 ring-green-100",
  secondary: "bg-gray-400 text-white hover:bg-gray-600 ring-gray-100",
};

const defaultStyles =
  "disabled:opacity-25 rounded font-bold text-lg ring-4 shadow-sm";

export const Button = ({ variant = "primary", ...p }: ButtonProps) => {
  const { className, ...props } = p;
  return (
    <button
      className={`${defaultStyles} ${variants[variant]} ${p.className}`}
      {...props}
    />
  );
};
