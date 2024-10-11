import React, { useCallback, useState } from "react";
import useDebounce from "./useDebounce";

export default function useSearch(delay: number) {
  const [value, setValue] = useState("");
  const { debouncedValue } = useDebounce(value, delay);
  const handleOnChageValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );
  return { value: debouncedValue, handleOnChageValue };
}
