import axios from "axios";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service";
import { CategoryService } from "./category.service";
import { he } from "date-fns/locale";

let tokens = {
  accessToken: "",
  refreshToken: "",
};

export const setToken = (token: { accessToken: string; refreshToken: string }) => {
  tokens = {
    accessToken: token.accessToken,
    refreshToken: token.refreshToken,
  };
};

const apiServer = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiServer.interceptors.request.use(async (config) => {
  if (tokens.accessToken) {
    config.headers["Authorization"] = `Bearer ${tokens.accessToken}`;
  }
  // config.headers["abc"] = "123";
  return config;
});

apiServer.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const response = await apiServer.post("/api/auth/refresh", {
          refreshToken: tokens.refreshToken,
        });
        const { newAccessToken, refreshToken } = response.data;
        if (!newAccessToken || !refreshToken) {
          throw new Error("토큰이 존재하지 않습니다.");
        }
        setToken({ accessToken: newAccessToken, refreshToken });
        return apiServer.request(error.config);
      } catch (error) {
        console.error(error);
      }
    }
  }
);

export const authService = new AuthService(apiServer);
export const userService = new UserService(apiServer);
export const categoryService = new CategoryService(apiServer);
