import { pathToUrl } from "@/utils/url";
import axios, { AxiosInstance } from "axios";

const USER_ROUTES = {
  /** 회원가입 */
  SIGN_UP: `/api/users`,
  /** 내 정보 조회 */
  GET_MY_INFO: `/api/users/me`,
  /** ID 찾기 */
  FIND_ID: `/api/users/id`,
  /** 내 비밀번호 수정 전 인증 */
  AUTH_PASSWORD: `/api/users/password`,
  /** 내 비밀번호 초기화 */
  RESET_PASSWORD: `/api/users/password`,
  /** 내 정보 수정 */
  UPDATE_MY_INFO: `/api/users/me`,
  /** 회원탈퇴(삭제)*/
  DELETE_MY_INFO: `/api/users`,
  /** 권한 부여 */
  GRANT_AUTH: `/api/users/role`,
} as const;

export class UserService {
  _ajax: AxiosInstance;

  constructor(_ajax: AxiosInstance = axios.create()) {
    this._ajax = _ajax;
  }

  async signUp(req: signUpRequest): Promise<signUpResponse> {
    const { body } = req;
    const { data } = await this._ajax.post(pathToUrl(USER_ROUTES.SIGN_UP, {}), { ...body });
    return data;
  }

  async resetPassword(req: resetPasswordRequest): Promise<resetPasswordResponse> {
    const { path, params, body } = req;
    const { data } = await this._ajax.post(pathToUrl(USER_ROUTES.RESET_PASSWORD, path ?? {}), { params, ...body });
    return data;
  }
}
