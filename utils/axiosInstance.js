import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000,
  timeoutErrorMessage:
    'Timeout... Please try after sometime...',
  maxRedirects: 0,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    const token = sessionStorage.getItem('token');
    if (token) {
      return (config.headers[
        'Authorization'
      ] = `Bearer ${token}`);
    }
    return config;
  },
  error =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  },
);

export default axiosInstance;
