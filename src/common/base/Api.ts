import Axios, { AxiosResponse } from 'axios';

Axios.defaults.baseURL = 'http://localhost:4000';
Axios.defaults.withCredentials = true;

export class Api {
  private static responseHandler(response: AxiosResponse) {
    return response.data;
  }

  static async get(url: string) {
    const response = await Axios.get(url);
    return this.responseHandler(response);
  }

  static async post(url: string, data: any) {
    const response = await Axios.post(url, data);
    return this.responseHandler(response);
  }

  static async delete(url: string) {
    const response = await Axios.delete(url);
    return this.responseHandler(response);
  }
}
