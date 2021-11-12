import React from "react";

export const Field = ({
  children,
  label,
  required = false,
}: {
  children: React.ReactNode;
  label: string;
  required?: boolean;
}) => {
  return (
    <label className="flex flex-col text-gray-400">
      <span>
        {label}
        {required && <span className="text-red-500 text-sm">*</span>}
      </span>
      {children}
    </label>
  );
};
