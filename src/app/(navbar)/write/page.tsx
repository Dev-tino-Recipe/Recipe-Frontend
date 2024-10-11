"use client";

import RecipeDetail from "@/components/recipe/detail/RecipeDetail";
import useWriteRecipeContext from "@/hooks/recipe/useWriteRecipeContext";
import { useEffect } from "react";

function WriteRecipePage() {
  const { initRecipeState } = useWriteRecipeContext();

  useEffect(() => {
    initRecipeState();
  }, [initRecipeState]);

  return <RecipeDetail isWrite={true} isUpdate={false} />;
}

export default WriteRecipePage;
