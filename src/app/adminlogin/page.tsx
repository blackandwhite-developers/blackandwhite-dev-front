"use client";
import { authService } from "@/api/services";
import AdminLoginView from "@/views/AdminLogin/AdminLogin.view";
import { useAtom } from "jotai";
import { authAtom } from "@/atoms/authAtom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminLoginPage = () => {
    const [auth, setAuth] = useAtom(authAtom);
    const router = useRouter();
    useEffect(() => {
        if (auth.isAuth) {
            router.push("/home");
        }
    }, [auth.isAuth, router]);
    const loginFn = async (email: string, password: string) => {
        try {
            const response = await authService.login({
                body: { email, password },
            });
            const { accessToken, refreshToken, user } = response;
            setAuth({ isAuth: true, user });
            document.cookie = `accessToken=${accessToken}`;
            document.cookie = `refreshToken=${refreshToken}`;
            router.push("/home");
        } catch (error) {
            console.error(error);
        }
    };

    return <AdminLoginView loginFn={loginFn} />;
};

export default AdminLoginPage;
