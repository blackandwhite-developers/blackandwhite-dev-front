type loginRequestPath = {};
type loginRequestBody = {
  email: string;
  password: string;
};
type loginRequestParams = {};

type loginRequest = {
  path?: loginRequestPath;
  body: loginRequestBody;
  params?: loginRequestParams;
};

type loginResponse = {
  accessToken: string;
  refreshToken: string;
};

type refreshRequestPath = {};
type refreshRequestBody = {
  refreshToken: string;
};
type refreshRequestParams = {};

type refreshRequest = {
  path?: refreshRequestPath;
  body: refreshRequestBody;
  params?: refreshRequestParams;
};

type refreshResponse = {
  accessToken: string;
  refreshToken: string;
};
