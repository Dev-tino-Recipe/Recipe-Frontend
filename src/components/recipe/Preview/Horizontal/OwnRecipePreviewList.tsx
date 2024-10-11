"use client";

import useFetchOwnRecipe from "@/hooks/recipe/useFetchOwnRecipe";
import PreviewRecipeList from "./PreviewRecipeList";

export default function OwnRecipePreviewList() {
  const { isSuccess, isLoading, data } = useFetchOwnRecipe(3);

  if (!isSuccess || isLoading) return null;

  return (
    <PreviewRecipeList
      title={"등록한 레시피"}
      moreUrl={"/recipe/own"}
      recipes={data?.pages.flat() ?? []}
    />
  );
}
