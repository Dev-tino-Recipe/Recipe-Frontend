"use client";

import useFetchRecentRecipe from "@/hooks/recipe/useFetchRecentRecipe";
import PreviewRecipeList from "./PreviewRecipeList";

export default function RecentRecipePreviewList() {
  const { isSuccess, isLoading, recipes } = useFetchRecentRecipe(3);

  if (!isSuccess || isLoading) return null;

  return (
    <PreviewRecipeList
      title={"최근 본 레시피"}
      moreUrl={"/recipe/recent"}
      recipes={recipes ?? []}
    />
  );
}
