import axios, { AxiosRequestConfig } from "axios";

export interface IApiAdapter {
  get: (url: string, data?: any, options?: any) => Promise<any>;
  post: (url: string, data: any, options?: any) => Promise<any>;
  put: (url: string, data: any, options?: any) => Promise<any>;
  patch: (url: string, data: any, options?: any) => Promise<any>;
  delete: (url: string, data: any, options?: any) => Promise<any>;
}

export default class AxiosAdapter implements IApiAdapter {
  async get(
    url: string,
    data: any = {},
    options: AxiosRequestConfig = {}
  ): Promise<any> {
    return axios.get(url, { ...options, params: data });
  }

  async post(
    url: string,
    data: any,
    options: AxiosRequestConfig = {}
  ): Promise<any> {
    return axios.post(url, data, options);
  }

  async put(
    url: string,
    data: any,
    options: AxiosRequestConfig = {}
  ): Promise<any> {
    return axios.put(url, data, options);
  }

  async patch(
    url: string,
    data: any,
    options: AxiosRequestConfig = {}
  ): Promise<any> {
    return axios.patch(url, data, options);
  }
  async delete(
    url: string,
    data?: any,
    options: AxiosRequestConfig = {},
    useBody: boolean = true
  ): Promise<any> {
    if (useBody) {
      return axios.delete(url, { ...options, data });
    } else {
      return axios.delete(url, { ...options, params: data });
    }
  }
}
