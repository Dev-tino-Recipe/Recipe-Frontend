import { axiosRequest } from "@/api/axios";
import { Recipe } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useFetchSearchRecipe(value: string) {
  const { isSuccess, isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["recipes", "search", value],
    queryFn: async ({ pageParam }) => {
      const { data } = await axiosRequest<{
        isSuccess: boolean;
        result: Recipe[];
      }>(
        {
          url: "http://localhost:4000/api/recipe/search",
          params: {
            page: pageParam,
            pageSize: 10,
            keyword: value,
          },
        },
        false
      );

      return data.result;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: Recipe[], _, lastPageParam) => {
      if (lastPage.length === 0) return undefined;
      return lastPageParam + 1;
    },
  });

  return { isSuccess, isLoading, data, fetchNextPage };
}
