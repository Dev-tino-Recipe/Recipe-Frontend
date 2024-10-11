"use client";

import VertialRecipePreviewList from "@/components/recipe/Preview/Vertical/VertialRecipePreviewList";
import useFetchRecentRecipe from "@/hooks/recipe/useFetchRecentRecipe";

export default function RecentRecipeListPage() {
  const { isSuccess, isLoading, recipes } = useFetchRecentRecipe(6);

  if (!isSuccess || isLoading) return null;

  return <VertialRecipePreviewList recipes={recipes} />;
}
