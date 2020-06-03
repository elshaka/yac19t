export const formatList = data => data.map(country => ({
  id: country.slug,
  name: country.Country
}));
