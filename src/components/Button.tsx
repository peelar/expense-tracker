import React from "react";

type Variant = "solid" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  solid: "bg-green-400 text-white",
  outline: "bg-white text-green-400",
};

const defaultStyles =
  "rounded font-bold text-lg ring-4 ring-green-100 shadow-sm";

export const Button = ({ variant = "solid", ...p }: ButtonProps) => {
  const { className, ...props } = p;
  return (
    <button
      className={`${defaultStyles} ${variants[variant]} ${p.className}`}
      {...props}
    />
  );
};
