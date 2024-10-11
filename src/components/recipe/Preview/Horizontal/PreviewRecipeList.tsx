"use client";

import { Recipe } from "@/types";
import PreviewRecipe from "@/components/recipe/Preview/Horizontal/PreviewRecipe";
import React from "react";
import Link from "next/link";

function PreviewRecipeList({
  recipes,
  title,
  moreUrl,
}: {
  readonly recipes: Recipe[];
  readonly title: string;
  readonly moreUrl: string;
}) {
  const recipeExist = recipes.length !== 0;

  return (
    <section className={"mb-4"}>
      <div className={"flex justify-between"}>
        <h1 className={"text-3xl font-bold mb-2"}>{title}</h1>
        <Link
          className={"flex flex-col justify-center text-gray-400"}
          href={moreUrl}
        >
          {"더보기 >"}
        </Link>
      </div>
      <div className={`grid gap-4 ${recipeExist && "grid-cols-3"}`}>
        {!recipeExist && (
          <div className="border-2 rounded-lg flex flex-col justify-center items-center h-28">
            레시피가 없습니다.
          </div>
        )}
        {recipes.map((recipe) => (
          <PreviewRecipe key={recipe.recipeId} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

export default PreviewRecipeList;
