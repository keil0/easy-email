import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
});

axiosInstance.interceptors.response.use(
  function <T>(res: AxiosResponse<T>) {
    return new Promise((resolve, reject) => {
      return resolve(res);
    });
  },
  (error) => {
    throw {
      ...error,
      message: error?.response?.data?.message || error?.message || error,
    };
  }
);

export const request = {
  async get<T>(url: string, config?: AxiosRequestConfig | undefined) {
    return axiosInstance.get<T>(url, config).then((data) => data.data);
  },
  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ) {
    return axiosInstance.post<T>(url, data, config).then((data) => data.data);
  },
  async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ) {
    return axiosInstance.patch<T>(url, data, config).then((data) => data.data);
  },
  async delete<T>(url: string, config?: AxiosRequestConfig | undefined): Promise<void> {
    await axiosInstance.delete<T>(url, config);
  }
};
