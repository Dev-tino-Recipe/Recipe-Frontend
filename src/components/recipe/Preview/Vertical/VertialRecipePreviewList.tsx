import { Recipe } from "@/types";
import VerticalRecipePreview from "./VerticalRecipePreview";

export default function VertialRecipePreviewList({
  recipes,
}: {
  readonly recipes: Recipe[];
}) {
  return (
    <div className="flex flex-col gap-4 py-4">
      {recipes?.map((recipe) => (
        <VerticalRecipePreview key={recipe.recipeId} recipe={recipe} />
      ))}
    </div>
  );
}
