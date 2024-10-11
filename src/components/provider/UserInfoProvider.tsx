"use client";
import React, { useMemo, useReducer } from "react";
import {
  initUserState,
  UserInfoContext,
  userInfoReducer,
} from "@/hooks/user/useUserInfoContext";

export default function UserInfoProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(userInfoReducer, initUserState);
  const props = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );
  return (
    <UserInfoContext.Provider value={props}>
      {children}
    </UserInfoContext.Provider>
  );
}
