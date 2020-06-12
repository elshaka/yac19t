import { BASE_URL } from '../services/covid19';

const dataForUrl = (url) => {
  const action = url.match(`${BASE_URL}/(\\w+)`)[1];

  switch (action) {
    case 'countries':
      return [
        {
          "Country": "Barbados",
          "Slug": "barbados",
          "ISO2": "BB"
        },
        {
          "Country": "Gibraltar",
          "Slug": "gibraltar",
          "ISO2": "GI"
        },
        {
          "Country": "Lithuania",
          "Slug": "lithuania",
          "ISO2": "LT"
        },
      ];
    case 'country':
      return [
        {
          "Country": "Switzerland",
          "CountryCode": "CH",
          "Lat": "46.82",
          "Lon": "8.23",
          "Cases": 17768,
          "Status": "confirmed",
          "Date": "2020-04-01T00:00:00Z"
        },
        {
          "Country": "Switzerland",
          "CountryCode": "CH",
          "Lat": "46.82",
          "Lon": "8.23",
          "Cases": 18827,
          "Status": "confirmed",
          "Date": "2020-04-02T00:00:00Z"
        },
        {
          "Country": "Switzerland",
          "CountryCode": "CH",
          "Lat": "46.82",
          "Lon": "8.23",
          "Cases": 19606,
          "Status": "confirmed",
          "Date": "2020-04-03T00:00:00Z"
        },
        {
          "Country": "Switzerland",
          "CountryCode": "CH",
          "Lat": "46.82",
          "Lon": "8.23",
          "Cases": 20505,
          "Status": "confirmed",
          "Date": "2020-04-04T00:00:00Z"
        }
      ];
    default:
      throw `No mocked response implemented for action: ${action}`;
  };
};

export default {
  get: (url, _) => Promise.resolve({data: dataForUrl(url)}),
};
