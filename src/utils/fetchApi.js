import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
});

export const getPosts = async (endpoint) => {
  const { data } = await request.get(endpoint);
  return data;
};

export const dataRequest = async (endpoint, body) => {
  const { data } = await request.post(endpoint, body);
  return data;
};

export const dataUpdate = async (endpoint, body) => {
  const { data } = await request.patch(endpoint, body);
  return data;
};