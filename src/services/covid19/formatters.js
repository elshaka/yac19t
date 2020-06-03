export const formatList = data => data.map(country => ({
  id: country.Slug,
  name: country.Country,
}));

export const formatItem = data => {
  const last = data[data.length - 1];
  const stats = data.map(item => ({
    confirmed: item.Confirmed,
    deaths: item.Deaths,
    recovered: item.Recovered,
    active: item.Active,
    datetime: item.Date,
  }));

  return {
    name: last.Country,
    confirmed: last.Confirmed,
    deaths: last.Deaths,
    recovered: last.Recovered,
    active: last.Active,
    stats,
  };
};
