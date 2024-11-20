type loginRequestPath = unknown;
type loginRequestBody = {
  email: string;
  password: string;
};
type loginRequestParams = unknown;

type loginRequest = {
  path?: loginRequestPath;
  body: loginRequestBody;
  params?: loginRequestParams;
};

type loginResponse = {
  accessToken: string;
  refreshToken: string;
  user: ILoginResponse;
};

type refreshRequestPath = unknown;
type refreshRequestBody = {
  refreshToken: string;
};
type refreshRequestParams = unknown;

type refreshRequest = {
  path?: refreshRequestPath;
  body: refreshRequestBody;
  params?: refreshRequestParams;
};

type refreshResponse = {
  accessToken: string;
  refreshToken: string;
};
