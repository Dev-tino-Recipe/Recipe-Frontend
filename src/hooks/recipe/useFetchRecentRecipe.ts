import { axiosRequest } from "@/api/axios";
import { Recipe, RecipeDetailType } from "@/types";
import { getRecentRecipeIds } from "@/util/localManager";
import { useQueries, UseQueryOptions } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useFetchRecentRecipe(pageSize: number) {
  const [recentRecipeIds, setRecentRecipeIds] = useState<string[]>([]);
  useEffect(() => {
    setRecentRecipeIds(getRecentRecipeIds().slice(0, pageSize));
  }, [pageSize]);

  const results = useQueries<UseQueryOptions<RecipeDetailType>[]>({
    queries: recentRecipeIds.map((recipeId) => ({
      queryKey: ["recipes", recipeId],
      queryFn: async () => {
        const { data } = await axiosRequest(
          {
            url: "/recipe/detail",
            method: "get",
            params: {
              recipeId,
            },
          },
          false
        );

        const { isSuccess, result, message } = data as {
          isSuccess: boolean;
          result: RecipeDetailType;
          message: string;
        };

        if (!isSuccess) {
          console.error(message);
          throw new Error("가져오기 실패");
        }

        return result;
      },
      enabled: !!recipeId,
    })),
  });

  const isSuccess = results.every((result) => result.isSuccess);
  const isLoading = results.some((result) => result.isLoading);
  const recipes = results.map((result) => ({
    ...result.data?.recipe,
  })) as Recipe[];

  return { isSuccess, isLoading, recipes };
}
