import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
});

const loginRequest = async (endpoint, body) => {
  const { data } = await request.post(endpoint, body);
  return data;
};

export default loginRequest;
