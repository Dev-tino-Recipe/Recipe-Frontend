"use client";

import useWriteRecipeContext from "@/hooks/recipe/useWriteRecipeContext";
import { getUserId } from "@/util/localManager";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function RecipeHeader({
  isWrite,
  isUpdate,
}: {
  readonly isWrite: boolean;
  readonly isUpdate: boolean;
}) {
  const { state, handleSubmitRecipe } = useWriteRecipeContext();
  const router = useRouter();
  const { message, userId } = state;

  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    setIsMine(getUserId() === userId);
  }, [userId]);

  return (
    <header
      className={"bg-primary-600 h-16 flex justify-between items-end mb-2 px-4"}
    >
      <button
        onClick={() => router.back()}
        type={"submit"}
        className={`mr-2 mb-2 text-nowrap ${!isUpdate && "invisible"}`}
      >
        취소하기
      </button>
      <p className="text-red-500 w-full text-center">{message}</p>
      <button
        onClick={() => {
          if (isWrite) {
            handleSubmitRecipe(getUserId());
            return;
          }
          if (isUpdate) {
            return window.alert("업데이트 함수 미구현");
          }
          return router.push(`/recipe/update`);
        }}
        type={"submit"}
        className={`mr-2 mb-2 text-nowrap ${!isWrite && !isMine && "invisible "}`}
      >
        {(isWrite || isUpdate) && "등록하기"}
        {isMine && !isUpdate && "수정하기"}
      </button>
    </header>
  );
}

export default RecipeHeader;
