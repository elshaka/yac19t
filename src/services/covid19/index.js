import axios from 'axios';
import { formatList, formatItem } from './formatters';
import Cache from '../../utils/cache';

const BASE_URL = 'https://api.covid19api.com';
const DEFAULT_REQUEST_OPTIONS = { mode: 'cors' };

const COVID19 = {
  getList: () => {
    const cachedList = Cache.get('list');
    if (cachedList) {
      return Promise.resolve(formatList(cachedList));
    }

    const requestUrl = `${BASE_URL}/countries`;
    return axios.get(requestUrl, DEFAULT_REQUEST_OPTIONS)
      .then(response => {
        Cache.set('list', response.data);
        return response.data;
      })
      .then(list => formatList(list));
  },
  getItem: id => {
    const requestUrl = `${BASE_URL}/country/${id}`;
    return axios.get(requestUrl, DEFAULT_REQUEST_OPTIONS)
      .then(response => formatItem(response.data));
  },
};

export default COVID19;
