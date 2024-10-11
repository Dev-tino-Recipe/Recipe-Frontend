"use client";

// const testImageSrc =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOHBlPRhPQBXxSSv0qkEAvCAt6dpdTBpCIQ&s";

import { Recipe } from "@/types";
import Link from "next/link";
import Image from "next/image";

function PreviewRecipe({ recipe }: { readonly recipe: Recipe }) {
  const { recipeId, title, description, url } = recipe;
  const imageUrl = url || "/";

  return (
    <Link href={`/recipe/${recipeId}`} className={"flex flex-col"}>
      <Image
        className={"border-2 object-cover aspect-square rounded-xl"}
        src={imageUrl}
        width={300}
        height={300}
        alt={"잘못된 url"}
      />
      <div className={"flex-col"}>
        <h2 className={"text-lg font-bold -mb-2"}>{title}</h2>
        <span className={"py-1 line-clamp-1"}>{description}</span>
      </div>
    </Link>
  );
}

export default PreviewRecipe;
