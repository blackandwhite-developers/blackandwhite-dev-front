interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  profile: {
    /** ID */
    id: string;
    /** 연락처 */
    phone: string;
    /** 생년월일 */
    birth: string;
    /** 성별 */
    gender: string;
    /** 관심사 */
    interest: string;
    /** 닉네임 */
    nickname: string;
  };
}

type signUpRequestPath = {};
type signUpRequestBody = {
  name: string;
  email: string;
  password: string;
  profile: {
    phone: string;
    birth: string;
    gender: string;
    interest: string;
    nickname: string;
  };
  terms: {
    termsOfService: boolean;
    privacyPolicy: boolean;
    locationBasedService: boolean;
    marketingInfoAgree: boolean;
  };
};
type signUpRequestParams = {};

type signUpRequest = {
  path?: signUpRequestPath;
  body: signUpRequestBody;
  params?: signUpRequestParams;
};

type signUpResponse = IUser;

type resetPasswordRequestPath = {};
type resetPasswordRequestBody = {};
type resetPasswordRequestParams = {};

type resetPasswordRequest = {
  path?: resetPasswordRequestPath;
  body?: resetPasswordRequestBody;
  params?: resetPasswordRequestParams;
};

type resetPasswordResponse = {};

type getMyInfoRequestPath = {};
type getMyInfoRequestBody = {};
type getMyInfoRequestParams = {};

type getMyInfoRequest = {
  path?: getMyInfoRequestPath;
  body?: getMyInfoRequestBody;
  params?: getMyInfoRequestParams;
};

type getMyInfoResponse = IUser;
