"use client";

import {
  WriteRecipeContext,
  writeRecipeInitState,
  writeRecipeReducer,
} from "@/hooks/recipe/useWriteRecipeContext";
import React, { useMemo, useReducer } from "react";

function WriteRecipeProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(
    writeRecipeReducer,
    writeRecipeInitState
  );

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <WriteRecipeContext.Provider value={value}>
      {children}
    </WriteRecipeContext.Provider>
  );
}

export default WriteRecipeProvider;
