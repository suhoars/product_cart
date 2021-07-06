import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const configUrl = (uri: string[]) => {
  return `${uri.join('/')}`;
};

export const getApi = (uri: string[]) => {
  return axios.get(configUrl(uri));
};
