"use client";

import RecipeDetail from "@/components/recipe/detail/RecipeDetail";
import useFetchRecipe from "@/hooks/recipe/useFetchRecipe";
import useWriteRecipeContext from "@/hooks/recipe/useWriteRecipeContext";
import { pushRecentRecipe } from "@/util/localManager";
import { useEffect } from "react";

function RecipeDetailPage({
  params,
}: {
  readonly params: { recipeId: string };
}) {
  const { recipeId } = params;
  const { isSuccess, isLoading, recipe } = useFetchRecipe(recipeId);
  const { setRecipe } = useWriteRecipeContext();
  useEffect(() => {
    if (isLoading || !isSuccess) return;
    setRecipe(recipe!);
    pushRecentRecipe(recipe!.recipe.recipeId);
  }, [isLoading, isSuccess, recipe, setRecipe]);

  if (isLoading) {
    return null;
  }

  return <RecipeDetail isWrite={false} isUpdate={false} />;
}

export default RecipeDetailPage;
