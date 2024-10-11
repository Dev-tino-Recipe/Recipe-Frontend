import useFetchSearchRecipe from "@/hooks/recipe/useFetchSearchRecipe";
import VertialRecipePreviewList from "./VertialRecipePreviewList";

export default function SearchRecipePreviewList({
  value,
}: {
  readonly value: string;
}) {
  const { isSuccess, isLoading, data } = useFetchSearchRecipe(value);

  if (!isSuccess && isLoading) return null;

  return <VertialRecipePreviewList recipes={data?.pages.flat() ?? []} />;
}
