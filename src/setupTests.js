import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BASE_URL } from './services/covid19';

const mock = new MockAdapter(axios);

mock.onGet(`${BASE_URL}/countries`).reply(200, [
  {
    Country: 'Barbados',
    Slug: 'barbados',
    ISO2: 'BB',
  },
  {
    Country: 'Gibraltar',
    Slug: 'gibraltar',
    ISO2: 'GI',
  },
  {
    Country: 'Lithuania',
    Slug: 'lithuania',
    ISO2: 'LT',
  },
]);

mock.onGet(`${BASE_URL}/country`).reply(200, [
  {
    Country: 'Switzerland',
    CountryCode: 'CH',
    Lat: '46.82',
    Lon: '8.23',
    Cases: 17768,
    Status: 'confirmed',
    Date: '2020-04-01T00:00:00Z',
  },
  {
    Country: 'Switzerland',
    CountryCode: 'CH',
    Lat: '46.82',
    Lon: '8.23',
    Cases: 18827,
    Status: 'confirmed',
    Date: '2020-04-02T00:00:00Z',
  },
  {
    Country: 'Switzerland',
    CountryCode: 'CH',
    Lat: '46.82',
    Lon: '8.23',
    Cases: 19606,
    Status: 'confirmed',
    Date: '2020-04-03T00:00:00Z',
  },
  {
    Country: 'Switzerland',
    CountryCode: 'CH',
    Lat: '46.82',
    Lon: '8.23',
    Cases: 20505,
    Status: 'confirmed',
    Date: '2020-04-04T00:00:00Z',
  },
]);
