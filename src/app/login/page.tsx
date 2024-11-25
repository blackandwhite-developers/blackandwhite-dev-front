"use client";
import { authService } from "@/api/services";
import LoginView from "@/views/Login/Login.view";
import { useAtom } from "jotai";
import { authAtom } from "@/atoms/authAtom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const LoginPage = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const router = useRouter();
  useEffect(() => {
    if (auth.isAuth) {
      router.push("/home");
    }
  }, [auth.isAuth, router]);
  const loginFn = async (email: string, password: string) => {
    try {
      const response = await authService.login({ body: { email, password } });
      const { accessToken, refreshToken, user } = response;
      setAuth({ isAuth: true, user });
      document.cookie = `accessToken=${accessToken}; path=/; samesite=None; secure`;
      document.cookie = `refreshToken=${refreshToken}; path=/; samesite=None; secure`;

      router.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return <LoginView loginFn={loginFn} />;
};

export default LoginPage;
