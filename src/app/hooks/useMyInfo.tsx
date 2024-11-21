"use client";
import { setToken, userService } from "@/api/services";
import { authAtom } from "@/atoms/authAtom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const useMyInfo = () => {
  const [info, setInfo] = useState<IUser>();
  const [, setAuth] = useAtom(authAtom);
  const fetchInfo = async () => {
    setToken({
      accessToken:
        document.cookie
          .split(";")
          .find((row) => row.startsWith("accessToken"))
          ?.split("=")[1] || "",
      refreshToken:
        document.cookie
          .split(";")
          .find((row) => row.startsWith("refreshToken"))
          ?.split("=")[1] || "",
    });
    const res = await userService.getMyInfo();
    setInfo(res);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const resetInfo = () => {
    setAuth({
      isAuth: false,
      user: null,
    });
    setInfo(undefined);
    setToken({ accessToken: "", refreshToken: "" });
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return { info, resetInfo };
};

export default useMyInfo;
