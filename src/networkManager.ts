/* eslint-disable import/no-cycle */
/* eslint-disable import/export */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios';

// export const commBaseURL="http://3.235.175.5:8010/comm"

export const axiosErrorHandling = (errorCode: string) => {
  console.log('errorCode=', errorCode);
  switch (errorCode) {
    case 'INVALID_ACCESS_TOKEN':
      localStorage.removeItem('token');
      console.log('INVALID_ACCESS_TOKEN');
      window.location.href = '/login';
      break;
    case 'ACCESS_DENIED':
      break;
    case 'RESOURCE_USER_NOT_FOUND':
      break;
    case 'INTERNAL_SERVER_ERROR':
      console.log('INTERNAL_SERVER_ERROR');
      break;
    case 'PROJECT_NOT_FOUND': {
      window.location.href = '/overview';
      break;
    }
    default:
      break;
  }
};

export const initAxios = (): void => {
  axios.interceptors.response.use(
    response => {
      if (!localStorage.getItem('token')) {
        console.log('no token');
      }
      return response;
    },
    error => {
      if (error.response?.status === 401) {
        window.location.href = '/login';
        delete axios.defaults.headers.common.Authorization;
        localStorage.removeItem('token');
      }
      axiosErrorHandling(error.response?.data?.errorCode);
      return Promise.reject(error);
    },
  );
};

export const setToken = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default axios;
