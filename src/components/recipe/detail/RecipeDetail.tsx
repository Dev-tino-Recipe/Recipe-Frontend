import ReciepeHeader from "./ReciepeHeader";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import RecipeTitleInput from "./RecipeTitleInput";

export default function RecipeDetail({
  isWrite,
  isUpdate,
}: {
  readonly isWrite: boolean;
  readonly isUpdate: boolean;
}) {
  const isReadOnly = !(isWrite || isUpdate);

  return (
    <>
      <ReciepeHeader isWrite={isWrite} isUpdate={isUpdate} />
      <div className={"px-4 flex flex-col pb-8"}>
        <RecipeTitleInput isReadOnly={isReadOnly} />
        <RecipeIngredients isReadOnly={isReadOnly} />
        <RecipeInstructions isReadOnly={isReadOnly} />
      </div>
    </>
  );
}
