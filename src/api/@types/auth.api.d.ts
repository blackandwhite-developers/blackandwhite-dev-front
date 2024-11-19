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
