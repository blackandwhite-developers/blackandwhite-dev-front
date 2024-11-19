import axios from "axios";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service";

const apiServer = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
  timeout: 3000,
});

apiServer.interceptors.request.use((config) => {
  // console.log(config);
  const authData = localStorage.getItem("auth");
  const accessToken = authData ? JSON.parse(authData).accessToken : null;
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  // config.headers["abc"] = "123";
  return config;
});

apiServer.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.status === 401) {
      const authData = localStorage.getItem("auth");
      const refreshToken = authData ? JSON.parse(authData).refreshToken : null;
      if (refreshToken) {
        const response = await authService.refresh({ body: { refreshToken } });
        if (response) {
          const { accessToken, refreshToken } = response;
          localStorage.setItem("auth", JSON.stringify({ accessToken, refreshToken, isAuth: true }));
          return apiServer.request(error.config);
        }
      }
    }
    console.error(error);
  }
);

export const authService = new AuthService(apiServer);
export const userService = new UserService(apiServer);
