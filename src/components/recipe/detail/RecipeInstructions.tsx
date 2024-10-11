import AutoTextArea from "@/components/AutoTextArea";
import RecipeInputImage from "@/components/recipe/Preview/Horizontal/RecipeInputImage";
import useWriteRecipeContext from "@/hooks/recipe/useWriteRecipeContext";
import React from "react";

export default function RecipeInstructions({
  isReadOnly,
}: {
  readonly isReadOnly: boolean;
}) {
  const {
    state,
    addInstruction,
    handleChangeImage,
    handleChangeInput,
    removeInstruction,
  } = useWriteRecipeContext();
  const { instructions } = state;

  return (
    <section>
      <h2 className={"text-2xl font-bold my-3"}>레시피를 작성해 주세요</h2>
      {instructions.map(({ id, title, description, imgUrl }, index) => (
        <React.Fragment key={id}>
          <span className="text-2xl">{index + 1}.</span>
          <AutoTextArea
            value={title}
            onChange={(e) => {
              handleChangeInput(
                { mainName: "instructions", subName: "title", index },
                e.currentTarget.value
              );
            }}
            readOnly={isReadOnly}
            className={"w-full text-xl resize-none outline-none p-0"}
            placeholder={"다음단계에서는 무엇을 해야 하나요?"}
          />
          <div className={"flex h-36"}>
            <RecipeInputImage
              isReadOnly={isReadOnly}
              src={imgUrl}
              onChange={(e) =>
                handleChangeImage(e, {
                  mainName: "instructions",
                  subName: "imgUrl",
                  index,
                })
              }
            />
            <AutoTextArea
              value={description}
              onChange={(e) => {
                handleChangeInput(
                  { mainName: "instructions", subName: "description", index },
                  e.currentTarget.value
                );
              }}
              readOnly={isReadOnly}
              placeholder={"내용을 입력하세요"}
              className={"w-full resize-none outline-none ml-2"}
            />
          </div>
          {!isReadOnly && instructions.length !== 1 && (
            <button
              onClick={() => removeInstruction(index)}
              className={"bg-primary-600 w-full h-12 text-red-600 mt-2 mb-4"}
            >
              단계 취소
            </button>
          )}
        </React.Fragment>
      ))}
      {!isReadOnly && (
        <button
          onClick={addInstruction}
          className={"bg-primary-600 w-full my-4 h-12 text-black"}
        >
          단계 추가
        </button>
      )}
    </section>
  );
}
