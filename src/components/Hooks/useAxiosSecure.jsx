import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  // Add a request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      // console.log(token);
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lies within the range of 2xx causes this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that fall outside the range of 2xx cause this function to trigger
      // Do something with response error
      const status = error.response ? error.response.status : null;
      if (status === 401 || status === 403) {
        logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
