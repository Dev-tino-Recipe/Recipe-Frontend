"use client";

import useFetchBookmarkedRecipe from "@/hooks/recipe/useFetchBookmarkedRecipe";
import PreviewRecipeList from "./PreviewRecipeList";

export default function BookmarkedRecipePreviewList() {
  const { isSuccess, isLoading, data } = useFetchBookmarkedRecipe(3);

  if (!isSuccess || isLoading) return null;

  return (
    <PreviewRecipeList
      title={"저장한 레시피"}
      moreUrl={"/recipe/bookmarked"}
      recipes={data?.pages.flat() ?? []}
    />
  );
}
