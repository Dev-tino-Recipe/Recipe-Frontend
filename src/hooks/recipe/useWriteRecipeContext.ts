"use client";

import { RecipeDetailType, RecipeWrite, WriteRecipeName } from "@/types";
import React, { useCallback, useContext } from "react";
import { fileToUrl } from "@/util/fileConverter";
import { axiosRequest } from "@/api/axios";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";

export const writeRecipeInitState: RecipeWrite = {
  title: "",
  description: "",
  thumbnail: "",
  ingredients: [
    {
      id: v4(),
      name: "",
      quantity: "",
    },
  ],
  instructions: [
    {
      id: v4(),
      title: "",
      description: "",
      imgUrl: "",
    },
  ],
  message: "",
};

export const WriteRecipeContext = React.createContext<{
  state: RecipeWrite;
  dispatch: React.Dispatch<ActionType>;
} | null>(null);

type ActionType =
  | {
      type: "CHANGE_INPUT";
      payload: {
        name: WriteRecipeName;
        value: string;
      };
    }
  | {
      type: "ADD_INGREDIENT";
    }
  | {
      type: "REMOVE_INGREDIENT";
      payload: {
        index: number;
      };
    }
  | {
      type: "ADD_INSTRUCTION";
    }
  | {
      type: "REMOVE_INSTRUCTION";
      payload: {
        index: number;
      };
    }
  | {
      type: "CHANGE_IMAGE";
      payload: {
        name: WriteRecipeName;
        value: string;
      };
    }
  | {
      type: "VALID_RECIPE";
      payload: {
        message: string;
      };
    }
  | {
      type: "SET_RECIPE";
      payload: RecipeDetailType;
    }
  | {
      type: "INIT_RECIPE";
    };

export const writeRecipeReducer = (
  state: RecipeWrite,
  action: ActionType
): RecipeWrite => {
  switch (action.type) {
    case "CHANGE_INPUT": {
      const { name, value } = action.payload;
      const { mainName, subName, index } = name;

      if (mainName === "ingredients" || mainName === "instructions") {
        return {
          ...state,
          [mainName]: state[mainName].map((item, i) => {
            if (i === index) {
              return {
                ...item,
                [subName!]: value,
              };
            }
            return item;
          }),
        };
      }

      return {
        ...state,
        [mainName]: value,
      };
    }
    case "ADD_INGREDIENT": {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          {
            id: v4(),
            name: "",
            quantity: "",
          },
        ],
      };
    }

    case "REMOVE_INGREDIENT": {
      if (state.ingredients.length === 1) return state;

      return {
        ...state,
        ingredients: state.ingredients.filter(
          (_, index) => index !== action.payload.index
        ),
      };
    }

    case "ADD_INSTRUCTION": {
      return {
        ...state,
        instructions: [
          ...state.instructions,
          {
            id: v4(),
            title: "",
            description: "",
            imgUrl: "",
          },
        ],
      };
    }

    case "REMOVE_INSTRUCTION": {
      if (state.instructions.length === 1) return state;

      return {
        ...state,
        instructions: state.instructions.filter(
          (_, index) => index !== action.payload.index
        ),
      };
    }
    case "CHANGE_IMAGE": {
      if (action.payload.name.mainName === "thumbnail") {
        return {
          ...state,
          thumbnail: action.payload.value,
        };
      } else {
        return {
          ...state,
          instructions: state.instructions.map((item, i) => {
            if (i === action.payload.name.index) {
              return {
                ...item,
                imgUrl: action.payload.value,
              };
            }
            return item;
          }),
        };
      }
    }
    case "VALID_RECIPE": {
      return {
        ...state,
        message: action.payload.message,
      };
    }

    case "SET_RECIPE": {
      const { recipe, ingredients, instructions, user } = action.payload;
      return {
        ...recipe,
        userId: user.userId,
        thumbnail: recipe.url,
        ingredients: ingredients.map((v) => ({ ...v, id: v4() })),
        instructions: instructions.map((v) => ({ ...v, id: v4() })),
      };
    }

    case "INIT_RECIPE": {
      return {
        ...writeRecipeInitState,
      };
    }
  }

  return state;
};

export default function useWriteRecipeContext() {
  const context = useContext(WriteRecipeContext);

  const router = useRouter();

  if (!context) {
    throw new Error("Cannot find WriteRecipeContext");
  }

  const { state, dispatch } = context;

  const handleChangeInput = useCallback(
    (name: WriteRecipeName, value: string) => {
      dispatch({
        type: "CHANGE_INPUT",
        payload: { name, value },
      });
    },
    [dispatch]
  );

  const addIngredient = useCallback(() => {
    dispatch({
      type: "ADD_INGREDIENT",
    });
  }, [dispatch]);

  const removeIngredient = useCallback(
    (index: number) => {
      dispatch({
        type: "REMOVE_INGREDIENT",
        payload: { index },
      });
    },
    [dispatch]
  );

  const addInstruction = useCallback(() => {
    dispatch({
      type: "ADD_INSTRUCTION",
    });
  }, [dispatch]);

  const removeInstruction = useCallback(
    (index: number) => {
      dispatch({
        type: "REMOVE_INSTRUCTION",
        payload: { index },
      });
    },
    [dispatch]
  );

  const handleChangeImage = useCallback(
    async (e: React.FormEvent<HTMLElement>, name: WriteRecipeName) => {
      const selectedFile = (e.target as HTMLInputElement).files![0] as
        | File
        | undefined;
      if (!selectedFile) return;

      dispatch({
        type: "CHANGE_IMAGE",
        payload: {
          name,
          value: await fileToUrl(selectedFile),
        },
      });
    },
    [dispatch]
  );

  const validInput = useCallback(() => {
    const { title, thumbnail, description, ingredients, instructions } = state;
    if (title.length <= 1) {
      return "요리 이름은 2글자 이상이어야 합니다.";
    } else if (thumbnail === "") {
      return "요리 사진은 필수입니다.";
    } else if (description.length < 10 || description.length > 50) {
      return "요리설명은 10글자 이상, 50 글자 이하이어야 합니다.";
    }

    for (const ingredient of ingredients) {
      const { name, quantity } = ingredient;
      if (name.length < 2) {
        return "요리재료는 2글자 이상입니다.";
      } else if (quantity.length < 2) {
        return "요리재료 단위는 2글자 이상입니다.";
      }
    }

    for (const instruction of instructions) {
      const { title, description, imgUrl } = instruction;
      if (title.length < 2) {
        return "레시피 주제는 2글자 이상입니다.";
      } else if (description.length < 10 || description.length > 50) {
        return "레시피 설명은 2글자 이상입니다.";
      } else if (imgUrl === "") {
        return "레시피 사진은 필수입니다.";
      }
    }
  }, [state]);

  const handleSubmitRecipe = useCallback(
    async (userId: string) => {
      const message = validInput();
      if (message) {
        dispatch({
          type: "VALID_RECIPE",
          payload: {
            message,
          },
        });
        return;
      }

      const { data } = await axiosRequest(
        {
          url: "/recipe/regist",
          method: "post",
          data: { userId, ...state },
        },
        false
      );

      const { isSuccess } = data as { isSuccess: boolean };

      if (isSuccess) {
        router.replace("/");
      }
    },
    [dispatch, router, state, validInput]
  );

  const setRecipe = useCallback(
    (recipe: RecipeDetailType) => {
      dispatch({
        type: "SET_RECIPE",
        payload: recipe,
      });
    },
    [dispatch]
  );

  const initRecipeState = useCallback(() => {
    dispatch({
      type: "INIT_RECIPE",
    });
  }, [dispatch]);

  return {
    state,
    handleChangeInput,
    addIngredient,
    removeIngredient,
    addInstruction,
    removeInstruction,
    handleChangeImage,
    handleSubmitRecipe,
    setRecipe,
    initRecipeState,
  };
}
