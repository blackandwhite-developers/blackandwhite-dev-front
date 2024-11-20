import axios from "axios";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service";
import { CategoryService } from "./category.service";
import { getDefaultStore } from "jotai";
import { authAtom } from "@/atoms/authAtom";

const apiServer = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
  timeout: 3000,
});

const store = getDefaultStore();

apiServer.interceptors.request.use(async (config) => {
  // console.log(config);
  const auth = store.get(authAtom);
  const accessToken = auth.accessToken;
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
      const auth = store.get(authAtom);
      const refreshToken = auth.refreshToken;
      if (refreshToken) {
        const response = await authService.refresh({ body: { refreshToken } });
        if (response) {
          const { accessToken, refreshToken } = response;
          store.set(authAtom, { ...auth, accessToken, refreshToken });
          return apiServer.request(error.config);
        }
      }
    }
    console.error(error);
  }
);

export const authService = new AuthService(apiServer);
export const userService = new UserService(apiServer);
export const categoryService = new CategoryService(apiServer);
