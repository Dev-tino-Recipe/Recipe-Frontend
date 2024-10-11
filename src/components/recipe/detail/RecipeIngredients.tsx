import AutoTextArea from "@/components/AutoTextArea";
import RecipeInputImage from "@/components/recipe/Preview/Horizontal/RecipeInputImage";
import useWriteRecipeContext from "@/hooks/recipe/useWriteRecipeContext";

export default function RecipeIngredients({
  isReadOnly,
}: {
  readonly isReadOnly: boolean;
}) {
  const {
    state,
    addIngredient,
    handleChangeImage,
    handleChangeInput,
    removeIngredient,
  } = useWriteRecipeContext();

  const { thumbnail, ingredients } = state;

  return (
    <section>
      <h2 className={"text-2xl font-bold mb-3"}>필요한 재료를 알려주세요</h2>
      <div className={"flex h-36 gap-4"}>
        <RecipeInputImage
          src={thumbnail}
          isReadOnly={isReadOnly}
          onChange={(e) => handleChangeImage(e, { mainName: "ingredients" })}
        />
        <div className={"flex flex-col overflow-auto pb-4"}>
          {ingredients.map(({ id, name, quantity }, index) => (
            <div className={"flex mb-2"} key={id}>
              <div className={"flex flex-col overflow-y-auto"}>
                {index + 1}.
                <AutoTextArea
                  value={name}
                  onChange={(e) =>
                    handleChangeInput(
                      { mainName: "ingredients", subName: "name", index },
                      e.currentTarget.value
                    )
                  }
                  readOnly={isReadOnly}
                  className={"outline-none resize-none"}
                  placeholder={"재료이름"}
                />
                <AutoTextArea
                  value={quantity}
                  onChange={(e) => {
                    handleChangeInput(
                      { mainName: "ingredients", subName: "quantity", index },
                      e.currentTarget.value
                    );
                  }}
                  readOnly={isReadOnly}
                  className={"outline-none"}
                  type={"text"}
                  placeholder={"단위"}
                />
              </div>
              {!isReadOnly && ingredients.length !== 1 && (
                <button
                  onClick={() => removeIngredient(index)}
                  className={
                    "w-8 h-full flex justify-center items-center text-2xl text-red-600"
                  }
                >
                  -
                </button>
              )}
            </div>
          ))}
          {!isReadOnly && (
            <button
              onClick={addIngredient}
              className={"w-full flex justify-center text-2xl text-gray-400"}
            >
              +
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
