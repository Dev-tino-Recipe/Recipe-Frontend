import { Recipe } from "@/types";
import { toYMD } from "@/util/isoConvert";
import Image from "next/image";
import Link from "next/link";

export default function VerticalRecipePreview({
  recipe,
}: {
  readonly recipe: Recipe;
}) {
  const { y, m, d } = toYMD(recipe.updatedAt);
  const imageUrl = recipe.url || "/";

  return (
    <Link href={`/recipe/${recipe.recipeId}`} className="h-28 flex gap-4">
      <Image
        className="object-cover aspect-square border-2 rounded-lg"
        src={imageUrl}
        alt="유효하지 않은 이미지 입니다."
        width={150}
        height={150}
      />
      <div className="w-full flex flex-col justify-between relative items-start">
        <span className="absolute right-2 top-1">test</span>
        <span className="text-gray-400">{`${y}-${m}-${d}`}</span>
        <h3 className="text-2xl font-bold">{recipe.title}</h3>
        <p className="line-clamp-2 text-gray-400">{recipe.description}</p>
      </div>
    </Link>
  );
}
