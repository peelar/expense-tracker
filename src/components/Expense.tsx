import React from "react";

import { ExpenseForm } from "./ExpenseForm";

export const Expense = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <section className="ring-4 ring-green-400 rounded flex flex-col h-3/6 w-full max-w-md bg-white shadow-xl">
        <div className="w-full flex justify-center px-4 py-4 bg-green-400 text-white border-b-2 border-green-200">
          <span className="font-bold text-lg text-center">Expense</span>
        </div>
        <div className="px-4 py-4 h-full">
          <ExpenseForm />
        </div>
      </section>
    </div>
  );
};
