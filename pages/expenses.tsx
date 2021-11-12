import React from "react";

import { Expense } from "../src/components/Expense";
import { useCategories } from "../src/hooks/useCategories";
import { Authenticated } from "../src/layouts/Authenticated";

const Expenses = () => {
  const { data, isLoading } = useCategories();

  return (
    <Authenticated>
      {data && <Expense />}
      {isLoading && "Loading..."}
    </Authenticated>
  );
};

export default Expenses;
