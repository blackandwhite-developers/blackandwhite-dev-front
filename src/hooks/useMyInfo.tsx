"use client";

import { setToken, userService } from "@/api/services";
import { useEffect, useState } from "react";

const useMyInfo = () => {
  const [info, setInfo] = useState<IUser>();

  const fetchInfo = async () => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return "";
    };

    setToken({
      accessToken: getCookie("accessToken") || "",
      refreshToken: getCookie("refreshToken") || "",
    });
    const res = await userService.getMyInfo();
    setInfo(res);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return info;
};

export default useMyInfo;
