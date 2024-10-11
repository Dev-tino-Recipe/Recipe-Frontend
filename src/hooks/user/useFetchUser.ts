import { axiosRequest } from "@/api/axios";
import { User } from "@/types";
import * as localManager from "@/util/localManager";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useFetchUser() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(localManager.getUserId());
  }, []);

  const {
    isSuccess,
    isLoading,
    data: user,
  } = useQuery<User | null>({
    queryKey: ["users", userId],
    enabled: !!userId,
    queryFn: async () => {
      const { data } = await axiosRequest<{
        isSuccess: boolean;
        result: { user: User };
      }>(
        {
          url: "http://localhost:4000/api/auth/user",
          method: "get",
        },
        false
      );

      const { isSuccess, result } = data;

      if (!isSuccess) {
        throw new Error("login is require!");
      }

      return result.user;
    },
  });

  return { isSuccess, isLoading, user };
}
