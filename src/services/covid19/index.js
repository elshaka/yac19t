import axios from 'axios';
import { formatList, formatItem } from './formatters';

const BASE_URL = 'https://api.covid19api.com';
const DEFAULT_REQUEST_OPTIONS = { mode: 'cors' };

const COVID19 = (() => {
  const getList = () => {
    const requestUrl = `${BASE_URL}/countries`;
    return axios.get(requestUrl, DEFAULT_REQUEST_OPTIONS)
      .then(repsonse => formatList(repsonse.data));
  };

  const getItem = id => {
    const requestUrl = `${BASE_URL}/country/${id}`;
    return axios.get(requestUrl, DEFAULT_REQUEST_OPTIONS)
      .then(repsonse => formatItem(repsonse.data));
  };

  return { getList, getItem };
})();

export default COVID19;
