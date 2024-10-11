import { User } from "@/types";
import React, { useContext } from "react";

export const initUserState: User = {
  userId: "",
  username: "",
  createdAt: "",
};

type UserInfoActionType = {
  type: "SET_USER";
  payload: User;
};

export const UserInfoContext = React.createContext<{
  state: User;
  dispatch: React.Dispatch<UserInfoActionType>;
} | null>(null);

export function userInfoReducer(state: User, action: UserInfoActionType): User {
  if (action.type === "SET_USER") {
    return action.payload;
  } else {
    return state;
  }
}

export default function useUserInfoContext() {
  const context = useContext(UserInfoContext);

  if (!context) {
    throw new Error(
      "useUserInfoContext must be used within a UserInfoProvider"
    );
  }

  const { state, dispatch } = context;

  const setUser = (user: User) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  return { state, setUser };
}
