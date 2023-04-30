import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { API_URI } = process.env;

const request = axios.create({
  baseURL: API_URI,
});

const loginRequest = async (endpoint, body) => {
  const { data } = await request.post(endpoint, body);
  return data;
};

export default loginRequest;
