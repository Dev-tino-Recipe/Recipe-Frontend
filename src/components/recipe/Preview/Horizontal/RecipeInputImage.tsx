import ImageInput from "@/components/ImageInput";
import React from "react";

export default function RecipeInputImage({
  src,
  onChange,
  isReadOnly,
}: React.HTMLProps<HTMLImageElement | HTMLDivElement> & {
  readonly isReadOnly: boolean;
}) {
  return (
    <ImageInput
      onChange={onChange}
      disabled={isReadOnly}
      className={`h-full flex justify-center items-center aspect-square bg-primary-600 rounded-lg ${!isReadOnly && "cursor-pointer"}`}
    >
      {!isReadOnly && !src && <div className={"text-5xl"}>+</div>}
      {src && (
        <img
          className={"object-cover w-full h-full"}
          src={src}
          alt="유효하지 않은 이미지 입니다."
        />
      )}
    </ImageInput>
  );
}
