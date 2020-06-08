const Cache = (() => {
  const nowInEpoch = () => Math.round((new Date()).getTime() / 1000);

  const get = key => {
    const cachedValue = JSON.parse(localStorage.getItem(JSON.stringify(key)));
    if (cachedValue && nowInEpoch() < cachedValue.expiresAt) {
      return cachedValue.value;
    }

    localStorage.removeItem(JSON.stringify(key));
    return null;
  };

  const set = (key, value, expiresIn = 3600) => {
    const cachedValue = { expiresAt: nowInEpoch() + expiresIn, value };
    localStorage.setItem(JSON.stringify(key), JSON.stringify(cachedValue));
  };

  return { get, set };
})();

export default Cache;
