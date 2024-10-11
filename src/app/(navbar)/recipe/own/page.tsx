"use client";

import VertialRecipePreviewList from "@/components/recipe/Preview/Vertical/VertialRecipePreviewList";
import useScreenOn from "@/hooks/common/useScreenOn";
import useFetchOwnRecipe from "@/hooks/recipe/useFetchOwnRecipe";
import { useEffect } from "react";

export default function OwnRecipeListPage() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isSuccess } =
    useFetchOwnRecipe(10);

  const { isOnScreen, targetRef } = useScreenOn(0);

  useEffect(() => {
    if (isFetching || isLoading || !isOnScreen || !hasNextPage) return;
    fetchNextPage();
  }, [
    isSuccess,
    isLoading,
    isFetching,
    hasNextPage,
    isOnScreen,
    fetchNextPage,
  ]);

  return (
    <>
      <VertialRecipePreviewList recipes={data?.pages.flat() ?? []} />
      <div ref={targetRef}></div>
    </>
  );
}
