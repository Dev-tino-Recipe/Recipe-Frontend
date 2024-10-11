import useSearch from "@/hooks/common/useSearch";
import React from "react";

export default function SearchHeader({
  handleOnChageValue,
}: {
  readonly handleOnChageValue: ReturnType<
    typeof useSearch
  >["handleOnChageValue"];
}) {
  return (
    <>
      <div className="mt-10 mb-4 flex justify-center text-2xl font-bold">
        검색
      </div>
      <input
        onChange={handleOnChageValue}
        className="outline-none p-2 w-full border-2 rounded-lg border-orange-300"
        type="text"
      />
    </>
  );
}
