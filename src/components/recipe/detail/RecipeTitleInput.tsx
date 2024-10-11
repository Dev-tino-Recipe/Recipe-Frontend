import AutoTextArea from "@/components/AutoTextArea";
import useWriteRecipeContext from "@/hooks/recipe/useWriteRecipeContext";

export default function RecipeTitleInput({
  isReadOnly,
}: {
  readonly isReadOnly: boolean;
}) {
  const { state, handleChangeInput } = useWriteRecipeContext();
  const { title, description } = state;

  return (
    <section>
      {!isReadOnly && (
        <h2 className={"text-2xl font-bold"}>요리의 이름을 적어주세요</h2>
      )}
      <input
        onChange={(e) =>
          handleChangeInput({ mainName: "title" }, e.target.value)
        }
        value={title}
        readOnly={isReadOnly}
        className={"text-3xl w-full outline-none py-2"}
        type="text"
        placeholder={"요리의 이름은 무엇인가요?"}
      />
      <AutoTextArea
        rows={1}
        readOnly={isReadOnly}
        value={description}
        onChange={(e) =>
          handleChangeInput({ mainName: "description" }, e.currentTarget.value)
        }
        className={"w-full resize-none outline-none p-0"}
        placeholder={"간단하게 소개해주세요"}
      />
    </section>
  );
}
