import axios from "axios";

const apiServer = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
  timeout: 3000,
});

apiServer.interceptors.request.use((config) => {
  // console.log(config);

  // config.headers["abc"] = "123";

  return config;
});

apiServer.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401) {
      // 리프레시 토큰을 이용해서 액세스 토큰 재발급
    }
    console.error(error);
  }
);
