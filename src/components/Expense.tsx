import React from "react";
import { useForm } from "react-hook-form";

import { useCategories } from "../hooks/useCategories";
import { Button } from "./Button";

type ExpenseFormFields = {
  category: string;
  amount: number;
  date: Date;
};

const ExpenseForm = () => {
  const { data } = useCategories();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ExpenseFormFields>({
    mode: "onChange",
  });

  const onSubmit = (data: ExpenseFormFields) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between h-full"
    >
      <div className="flex flex-col gap-4">
        <label className="flex flex-col text-gray-400">
          Category
          <select
            {...register("category", { required: true })}
            className="text-black py-4"
          >
            {data?.values?.map(([id, category]) => (
              <option key={id} value={id}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col text-gray-400">
          Amount
          <input
            {...register("amount", { required: true })}
            className="text-black py-4"
            type="number"
            placeholder="420"
          />
        </label>
        <label className="flex flex-col text-gray-400">
          Date
          <input
            {...register("date", { required: true })}
            className="text-black py-4"
            type="date"
          />
        </label>
      </div>
      <Button disabled={!isValid} className="py-4">
        Add
      </Button>
    </form>
  );
};

export const Expense = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <section className="ring-4 ring-green-400 rounded flex flex-col h-2/5 w-full max-w-md bg-white shadow-xl">
        <div className="w-full flex justify-center px-4 py-4 bg-green-400 text-white border-b-2 border-green-400">
          <span className="font-bold text-lg text-center">Expense</span>
        </div>
        <div className="px-4 py-4 h-full">
          <ExpenseForm />
        </div>
      </section>
    </div>
  );
};
