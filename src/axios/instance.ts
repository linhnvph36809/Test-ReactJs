import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-test-web.agiletech.vn",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

instance.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

const refreshToken = async () => {
  try {
    const res = await instance.post("/auth/refresh-token", {
      refreshToken: localStorage.getItem("refreshToken"),
    });

    if (res?.data?.code === 401) {
      return null;
    } else {
      localStorage.setItem("token", res.data.accessToken);
      return res.data.accessToken;
    }
  } catch (error) {
    console.error("Không thể refresh token:", error);
  }
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status == 401) {
      const originalRequest = error.config;
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
