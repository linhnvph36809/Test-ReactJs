import instance from "../axios/instance";
import { useNavigate } from "react-router-dom";
import { IAuth } from "../interfaces/IAuth";
import { loadingContext } from "../context/LoadingContext";

const useAuth = () => {
  const navigate = useNavigate();
  const setLoading = loadingContext();
  const login = async (user: IAuth) => {
    try {
      setLoading(true);
      const { data: res } = await instance.post("/auth/login", user);
      if (res?.accessToken && res?.refreshToken) {
        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        navigate("/");
      } else {
        alert("Username is incorrect");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await instance.delete("/auth/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    logout,
  };
};

export default useAuth;
