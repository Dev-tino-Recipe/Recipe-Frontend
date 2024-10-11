"use client";

import SearchRecipePreviewList from "@/components/recipe/Preview/Vertical/SearchRecipePreviewList";
import SearchHeader from "@/components/recipe/search/SearchHeader";
import useSearch from "@/hooks/common/useSearch";

function SearchRecipePage() {
  const { value, handleOnChageValue } = useSearch(500);
  return (
    <div className="px-4">
      <SearchHeader handleOnChageValue={handleOnChageValue} />
      <SearchRecipePreviewList value={value} />
    </div>
  );
}

export default SearchRecipePage;
