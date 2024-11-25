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
  point: number;
  coupon: Array<ICoupon>;
}

interface ICoupon {
  id: string;
  title: string;
  discount: number;
  exp?: Date;
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
type resetPasswordRequestBody = {
  password: string;
};
type resetPasswordRequestParams = {
  email: string;
  name: string;
};

type resetPasswordRequest = {
  path?: resetPasswordRequestPath;
  body: resetPasswordRequestBody;
  params: resetPasswordRequestParams;
};

type resetPasswordResponse = {
  isSuccess: boolean;
};

type getMyInfoRequestPath = {};
type getMyInfoRequestBody = {};
type getMyInfoRequestParams = {};

type getMyInfoRequest = {
  path?: getMyInfoRequestPath;
  body?: getMyInfoRequestBody;
  params?: getMyInfoRequestParams;
};

type getMyInfoResponse = IUser;

type authPasswordRequestPath = {};
type authPasswordRequestBody = {
  name: string;
  email: string;
};
type authPasswordRequestParams = {};

type authPasswordRequest = {
  path?: authPasswordRequestPath;
  body: authPasswordRequestBody;
  params?: authPasswordRequestParams;
};

type authPasswordResponse = {
  isSuccess: boolean;
};

type updateMyInfoRequestPath = {};
type updateMyInfoRequestBody = {
  name: string;
  profile: {
    phone: string;
    birth: string;
    nickname: string;
    profileImage: string;
  };
};

type updateMyInfoRequestParams = {};

type updateMyInfoRequest = {
  path?: updateMyInfoRequestPath;
  body: updateMyInfoRequestBody;
  params?: updateMyInfoRequestParams;
};

type updateMyInfoResponse = {
  isSuccess: boolean;
};
