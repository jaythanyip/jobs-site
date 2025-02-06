/* eslint-disable */
import axios, { AxiosError, AxiosResponse } from "axios";
// import toast from "react-hot-toast";
// import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
// export const baseURL = "https://" + process.env.REACT_APP_BASE_URL;
// export const baseAuthURL = "https://" + process.env.REACT_APP_AUTH_URL;
// console.log(process.env.REACT_APP_BASE_URL)

export const baseURL = "http://192.168.1.4:21050";
export const baseAuthURL = "http://192.168.1.4:21050";


// // 添加请求拦截器
// axios.interceptors.request.use(
//   (config: any) => {
//     // 检测token是否过期
//     const token = localStorage.getItem("token") ?? null;
//     let isExpired = false;
//     try {
//       if (token) {
//         const userToken = jwtDecode(token);
//         isExpired = dayjs.unix(userToken.exp ?? 0).diff(dayjs()) < 1;
//       }
//       console.log("isTokenExpired?   ", isExpired);
//       if (isExpired) {
//         // Todo: refresh token
//         // 暂时直接登出
//         localStorage.clear();
//       }
//       return config;
//     } catch (e) {
//       localStorage.clear();
//       return Promise.reject(e);
//     }
//   },
//   (error) => {
//     localStorage.clear();
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
// );
// // 添加响应拦截器
// axios.interceptors.response.use(
//   function (response) {
//     // 对响应数据做点什么
//     return response;
//   },
//   function (error) {
//     console.log("axios.interceptors.response", error);
//     // 对响应错误做点什么
//     if (error.response.status === 401) {
//       console.log("Login status invalid");
//       localStorage.clear();
//       window.location.href = "/login";
//       // 清空缓存跳转登录页面
//     }
//     if (error.response.code === 302) {
//       console.log(error);
//       // 清空缓存跳转登录页面
//     }

//     return Promise.reject(error);
//   }
// );

const request = (
  url: string,
  params: object = {},
  method: string = "POST",
  auth: boolean = false,
  h: object = {}
) => {
  return new Promise<object>((resolve, reject) => {
    //请求头部分
    const headers = Object.assign(
      {},
      {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      h
    );

    axios({
      // 定义发起请求时的基本类型
      method: method,
      url: (auth? baseAuthURL: baseURL) + url,
      data: ["POST", "PUT", "PATCH", "DELETE"].includes(method) ? params : null,
      params: ["GET"].includes(method) ? params : null,
      headers: headers,
    })
      .then((res: AxiosResponse<object, object>) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err.response?.data as object);
      });
  });
};

export default request;
