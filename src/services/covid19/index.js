import axios from 'axios';
import { formatList } from './formatters';

const BASE_URL = 'https://api.covid19api.com/';
const DEFAULT_REQUEST_OPTIONS = { mode: 'cors' };

const COVID19 = (() => {
  const getList = () => {
    const requestUrl = BASE_URL + '/countries';
    return axios.get(requestUrl, DEFAULT_REQUEST_OPTIONS)
      .then(repsonse => formatList(repsonse.data));
  }

  return { getList };
})();

export default COVID19;
