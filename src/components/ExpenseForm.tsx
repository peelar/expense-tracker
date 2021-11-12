import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

import { useCategories } from "../hooks/useCategories";
import { Button } from "./Button";

export type ExpenseFormFields = {
  category: string;
  amount: number;
  date: Date;
  description: string;
};

const Field = ({
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

export const ExpenseForm = () => {
  const { data } = useCategories();
  const [count, setCount] = React.useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<ExpenseFormFields>({
    mode: "onChange",
  });

  const { isLoading, mutate } = useMutation(
    "expense",
    (values: ExpenseFormFields) =>
      fetch("/api/expense", {
        method: "POST",
        body: JSON.stringify(values),
      }).then((res) => res.json()),
    {
      onSuccess: () => {
        const nextCount = count + 1;
        setCount(nextCount);
        toast.success(
          nextCount === 5 ? "Wow! 5 expenses in a row!" : "Added an expense! 🎉"
        );
      },
      onError: () => {
        toast.error("Something went wrong 😢");
      },
    }
  );

  const onSubmit = (data: ExpenseFormFields) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between h-full"
    >
      <div className="flex flex-col gap-4">
        <Field label="Amount" required>
          <input
            {...register("amount", { required: true })}
            className="text-black py-4"
            type="number"
            placeholder="1$"
          />
        </Field>
        <Field label="Date">
          <input
            {...register("date")}
            className="text-black py-4"
            type="date"
          />
        </Field>

        <Field label="Category">
          <select {...register("category")} className="text-black py-4">
            {data?.values?.map(([id, category]) => (
              <option key={id} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Description">
          <input
            {...register("description")}
            className="text-black py-4"
            type="text"
            placeholder="A cupcake"
          />
        </Field>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3">
          <Button disabled={!isValid} className="py-4 w-full">
            {isLoading ? "Loading..." : "Add"}
          </Button>
        </div>
        <Button onClick={() => reset()} variant="secondary">
          Reset
        </Button>
      </div>
    </form>
  );
};
