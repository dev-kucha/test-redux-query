import { useQuery } from "react-query";
import { fetchData } from "../api";

export const useFetchCats = (id) => {
  const url = "https://catfact.ninja/fact";
  const { data, error, isLoading, status } = useQuery(
    "fetchats",
    () => fetchData(url),
    {
      //   enabled: id > 10,
      placeholderData: { fact: "" },
      cacheTime: 500,
    }
  );

  console.log(data?.data, "DATA");

  return {
    data: data?.data || {},
    error,
    isLoading,
    status,
  };
};
