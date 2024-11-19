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
      const { accessToken, refreshToken } = response;
      setAuth({ accessToken, refreshToken, isAuth: true });
      router.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return <LoginView loginFn={loginFn} />;
};

export default LoginPage;
