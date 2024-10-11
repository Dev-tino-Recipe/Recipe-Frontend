import { axiosRequest } from "@/api/axios";
import { Recipe } from "@/types";
import { getUserId } from "@/util/localManager";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useFetchBookmarkedRecipe(pageSize: number) {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (userId) return;
    setUserId(getUserId());
  }, [userId]);

  const { isSuccess, isLoading, isFetching, hasNextPage, fetchNextPage, data } =
    useInfiniteQuery({
      queryKey: ["recipes", "bookmarked", userId],
      queryFn: async ({ pageParam }) => {
        const response = await axiosRequest<{
          isSuccess: boolean;
          result: Recipe[];
        }>(
          {
            url: "http://localhost:4000/api/recipe/bookmarks",
            method: "get",
            params: {
              page: pageParam,
              pageSize,
              userId,
            },
          },
          false
        );

        return response?.data?.result;
      },
      initialPageParam: 1,
      enabled: !!userId,
      getNextPageParam: (lastPage: Recipe[], _, lastPageParam) => {
        if (lastPage.length === 0) return undefined;
        return lastPageParam + 1;
      },
    });

  return { isSuccess, isLoading, isFetching, hasNextPage, fetchNextPage, data };
}
