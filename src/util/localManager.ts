"use client";

export type LocalStorageType = {
  isLogin: boolean;
  userId: string;
  recentRecipeIds: string[];
};

const initState: LocalStorageType = {
  isLogin: false,
  userId: "",
  recentRecipeIds: [],
};

function getPreState(): LocalStorageType {
  return JSON.parse(localStorage.getItem("state")!) ?? initState;
}

function setState(state: LocalStorageType) {
  localStorage.setItem("state", JSON.stringify(state));
}

export function userLogin(userId: string) {
  setState({ ...getPreState(), userId });
}

export function userLogout() {
  setState({ ...initState });
}

export function pushRecentRecipe(recipeId: string) {
  const state = getPreState();

  const recentRecipeIds = state.recentRecipeIds ?? [];
  const isExist = recentRecipeIds.find((v) => v === recipeId);

  if (isExist) {
    const findIndex = recentRecipeIds.findIndex((v) => v === recipeId);
    recentRecipeIds.splice(findIndex, 1);
  }
  recentRecipeIds.splice(0, 0, recipeId);

  if (recentRecipeIds.length == 7) {
    recentRecipeIds.pop();
  }

  setState({ ...state, recentRecipeIds });
}

export function getUserId() {
  const { userId } = getPreState();
  return userId;
}

export function getRecentRecipeIds() {
  return getPreState().recentRecipeIds ?? [];
}
