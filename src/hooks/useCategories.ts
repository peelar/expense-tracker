import toast from "react-hot-toast";
import { useQuery } from "react-query";

type Category = [string, string];

type SuccessfulResponse = {
  range: string;
  majorDimension: string;
  values: Category[];
};

export const useCategories = () => {
  return useQuery<SuccessfulResponse>(
    "categories",
    () => fetch("/api/categories").then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
      onError: () => {
        toast.error("Something went wrong 😢");
      },
    }
  );
};
