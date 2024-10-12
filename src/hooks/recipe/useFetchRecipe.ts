import { axiosRequest } from "@/api/axios";
import { RecipeDetailType } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function useFetchRecipe(recipeId: string) {
  const { isSuccess, isLoading, data } = useQuery({
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
  });

  return { isSuccess, isLoading, recipe: data };
}
