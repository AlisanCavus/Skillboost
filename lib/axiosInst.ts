import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SYMFONY_API_URL;

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

