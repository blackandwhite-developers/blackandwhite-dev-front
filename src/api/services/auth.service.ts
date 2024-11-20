import { pathToUrl } from "@/utils/url";
import { AxiosInstance } from "axios";

const AUTH_ROUTES = {
  LOGIN: `/api/auth/login`,
  LOGOUT: `/api/auth/logout`,
  REFRESH: `/api/auth/refresh`,
  KAKAO_SOCIAL_LOGIN: `/api/auth/kakao/login`,
  KAKAO_SOCIAL_LOGOUT: `/api/auth/naver/login`,
  NAVER_SOCIAL_LOGIN: `/api/auth/naver/login`,
  NAVER_SOCIAL_LOGOUT: `/api/auth/naver/logout`,
  APPLE_SOCIAL_LOGIN: `/api/auth/apple/login`,
  APPLE_SOCIAL_LOGOUT: `/api/auth/apple/logout`,
} as const;

export class AuthService {
  _ajax: AxiosInstance;

  constructor(_ajax: AxiosInstance) {
    this._ajax = _ajax;
  }

  async login(req: loginRequest): Promise<loginResponse> {
    const { path, body } = req;
    const { data } = await this._ajax.post(pathToUrl(AUTH_ROUTES.LOGIN, path ?? {}), body);
    return data;
  }

  async refresh(req: refreshRequest): Promise<refreshResponse> {
    const { path, body } = req;
    const { data } = await this._ajax.post(pathToUrl(AUTH_ROUTES.REFRESH, path ?? {}), body);
    return data;
  }
}
