export interface SignupFormType {
  id: string;
  pw: string;
  pwc: string;
}

export interface SignupFormValidType {
  isNotDuplicateId: boolean;
  idDuplicateMessage: string;
  totalMessage: string;
}

export interface User {
  userId: string;
  username: string;
  createdAt: string;
}

export interface Recipe {
  recipeId: string;
  url: string;
  title: string;
  description: string;
  updatedAt: string;
}

export interface RecipeDetailType {
  recipe: Recipe;
  isBookMarked: boolean;
  user: User;
  ingredients: Ingredients[];
  instructions: Instructions[];
}

export interface RecipeWrite {
  userId?: string;
  title: string;
  thumbnail: string;
  description: string;
  ingredients: Ingredients[];
  instructions: Instructions[];
  message?: string;
}

export type WriteRecipeName = {
  mainName: keyof RecipeWrite;
  subName?: keyof Ingredients | keyof Instructions;
  index?: number;
};

export interface Ingredients {
  id: string;
  name: string;
  quantity: string;
}

export interface Instructions {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
}
