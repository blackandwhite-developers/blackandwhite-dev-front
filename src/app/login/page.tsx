import { authService } from "@/api/services";
import LoginView from "@/views/Login/Login.view";

const LoginPage = () => {
  const loginFn = async (email: string, password: string) => {
    const response = await authService.login({ body: { email, password } });
    const { accessToken, refreshToken } = response;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    console.log("login success");
  };

  return <LoginView loginFn={loginFn} />;
};

export default LoginPage;
