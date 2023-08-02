import axios from "axios";

const baseURL = "https://random-data-api.com";

const apiHelper = axios.create({
  baseURL,
  timeout: 10000,
});

apiHelper.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export const get = async (endpoint, params = {}) => {
  try {
    const response = await apiHelper.get(endpoint, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const post = async (endpoint, data = {}) => {
  try {
    const response = await apiHelper.post(endpoint, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const put = async (endpoint, data = {}) => {
  try {
    const response = await apiHelper.put(endpoint, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const del = async (endpoint) => {
  try {
    const response = await apiHelper.delete(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
};
