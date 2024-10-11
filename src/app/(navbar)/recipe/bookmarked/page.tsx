"use client";

import VertialRecipePreviewList from "@/components/recipe/Preview/Vertical/VertialRecipePreviewList";
import useScreenOn from "@/hooks/common/useScreenOn";
import useFetchBookmarkedRecipe from "@/hooks/recipe/useFetchBookmarkedRecipe";
import { useEffect } from "react";

export default function BookmarkedRecipeListPage() {
  const { isLoading, isSuccess, isFetching, hasNextPage, data, fetchNextPage } =
    useFetchBookmarkedRecipe(10);

  const { isOnScreen, targetRef } = useScreenOn(0);

  useEffect(() => {
    if (isLoading || isFetching || !hasNextPage || !isOnScreen) return;
    fetchNextPage();
  }, [
    isSuccess,
    isLoading,
    isFetching,
    isOnScreen,
    hasNextPage,
    fetchNextPage,
  ]);

  if (isLoading || !isSuccess) return null;

  return (
    <>
      <VertialRecipePreviewList recipes={data?.pages.flat() ?? []} />
      <div ref={targetRef}></div>
    </>
  );
}
