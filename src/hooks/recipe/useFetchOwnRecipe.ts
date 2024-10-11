import { axiosRequest } from "@/api/axios";
import { Recipe } from "@/types";
import { getUserId } from "@/util/localManager";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useFetchOwnRecipe(pageSize: number) {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (userId) return;
    setUserId(getUserId());
  }, [userId]);

  const { data, isSuccess, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["recipes", "users", userId],
      initialPageParam: 1,
      enabled: !!userId,
      queryFn: async ({ pageParam }) => {
        const { data } = await axiosRequest<{
          isSuccess: boolean;
          result: Recipe[];
        }>(
          {
            url: "http://localhost:4000/api/recipe/recheck",
            params: {
              page: pageParam,
              pageSize,
              userId: getUserId(),
            },
          },
          false
        );

        return data.result;
      },
      getNextPageParam: (lastPage: Recipe[], _, lastPageParam) => {
        if (lastPage.length === 0) return undefined;
        return lastPageParam + 1;
      },
    });

  return { isSuccess, isLoading, isFetching, hasNextPage, data, fetchNextPage };
}
